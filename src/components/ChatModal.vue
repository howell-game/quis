<template>
  <teleport to="body">
    <div class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-content">
        <!-- Header -->
        <div class="modal-header">
          <h2>{{ isAdmin ? 'Admin Chat' : 'Chat with Admin' }}</h2>
          <button class="close-btn" @click="$emit('close')">✖</button>
        </div>

        <!-- Admin view: show chat list until one is selected -->
        <div v-if="isAdmin && !activeChatId">
          <AdminChatList @chat-selected="loadChat" />
        </div>

        <!-- Chat view -->
        <div v-else-if="activeChatId || chatId">
          <div class="chat-box" ref="chatBox">
            <div
              v-for="msg in messages"
              :key="msg.id"
              class="message"
              :class="{
                'my-message': msg.senderId === currentUser?.uid,
                'other-message': msg.senderId !== currentUser?.uid,
                'withdraw-message': msg.type === 'withdraw'
              }"
            >
              <template v-if="msg.type === 'withdraw'">
                🏦 <strong>Reward Request</strong><br>
                {{ msg.text }}
              </template>
              <template v-else>
                <strong>{{ msg.senderName }}:</strong> {{ msg.text }}
              </template>
            </div>

            <!-- Inline withdraw form -->
            <div v-if="showWithdrawForm" class="withdraw-form">
              <label>Country:</label>
              <input v-model="withdrawData.country" placeholder="Enter country" />

              <label>Currency:</label>
              <input v-model="withdrawData.currency" placeholder="Enter currency" />

              <label>Bank:</label>
              <input v-model="withdrawData.bank" placeholder="Enter bank" />

              <label>Account Number:</label>
              <input v-model="withdrawData.accountNumber" placeholder="Enter account number" />

              <label>Amount:</label>
              <input v-model="withdrawData.amount" type="number" readonly />

              <div class="withdraw-actions">
  <button 
    @click="submitWithdraw" 
    :disabled="!isWithdrawFormValid"
    :class="{ disabled: !isWithdrawFormValid }"
  >
    Submit Request
  </button>
  <button @click="showWithdrawForm = false">Cancel</button>
</div>

            </div>
          </div>

          <!-- Footer -->
          <div class="input-area">
            <input
              v-model="message"
              placeholder="Type your message..."
              @keyup.enter="sendMessage"
            />
            <button @click="sendMessage">Send</button>
            <button @click="toggleWithdrawForm">Claim Reward</button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue'
import { db, auth } from '@/firebase'
import {
  collection, addDoc, query, orderBy, onSnapshot, serverTimestamp,
  doc, setDoc, getDoc, getDocs, where, updateDoc, increment
} from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import AdminChatList from './AdminChatList.vue'
import { computed } from 'vue'

const props = defineProps({
  isAdmin: Boolean
})

const message = ref('')
const messages = ref([])
const chatId = ref('')
const currentUser = ref(null)
const activeChatId = ref(null)
const participants = ref([])
const chatBox = ref(null)

const showWithdrawForm = ref(false)
const withdrawData = ref({
  country: '',
  currency: '',
  bank: '',
  accountNumber: '',
  amount: 0
})

function scrollToBottom() {
  nextTick(() => {
    if (chatBox.value) {
      chatBox.value.scrollTop = chatBox.value.scrollHeight
    }
  })
}
// Computed: Check if form is valid
const isWithdrawFormValid = computed(() => {
  const data = withdrawData.value
  return (
    data.country.trim() &&
    data.currency.trim() &&
    data.bank.trim() &&
    data.accountNumber.trim() &&
    Number(data.amount) > 0
  )
})


async function loadChat(id) {
  chatId.value = id
  activeChatId.value = id

  const snap = await getDoc(doc(db, 'chats', id))
  if (snap.exists()) {
    participants.value = snap.data().participants || []
  }

  const currentUserId = auth.currentUser?.uid
  if (currentUserId) {
    await updateDoc(doc(db, 'chats', id), {
      [`unread.${currentUserId}`]: 0
    }).catch(() => {})
  }

  listenForMessages()
}

async function setupChat() {
  if (!currentUser.value || props.isAdmin) return

  const userId = currentUser.value.uid

  const adminsQ = query(collection(db, 'users'), where('role', '==', 'admin'))
  const adminSnap = await getDocs(adminsQ)
  if (adminSnap.empty) return
  const adminId = adminSnap.docs[0].id

  const chatsRef = collection(db, 'chats')
  const existingQ = query(chatsRef, where('participants', 'array-contains', userId))
  const existing = await getDocs(existingQ)

  if (!existing.empty) {
    const doc0 = existing.docs[0]
    chatId.value = doc0.id
    participants.value = doc0.data().participants || [userId, adminId]

    if (!participants.value.includes(adminId)) {
      participants.value.push(adminId)
      await updateDoc(doc(db, 'chats', chatId.value), {
        participants: participants.value,
        [`unread.${adminId}`]: 0
      })
    }
  } else {
    const newChatRef = await addDoc(chatsRef, {
      participants: [userId, adminId],
      updatedAt: serverTimestamp(),
      unread: { [adminId]: 0, [userId]: 0 }
    })
    chatId.value = newChatRef.id
    participants.value = [userId, adminId]
  }

  listenForMessages()
}

function listenForMessages() {
  if (!chatId.value) return
  const qMsgs = query(
    collection(db, 'chats', chatId.value, 'messages'),
    orderBy('timestamp', 'asc')
  )
  onSnapshot(qMsgs, (snapshot) => {
    messages.value = snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
    scrollToBottom()
  })
}

async function sendMessage() {
  if (!message.value.trim() || !chatId.value || !currentUser.value) return

  const me = currentUser.value.uid

  if (!participants.value?.length) {
    const snap = await getDoc(doc(db, 'chats', chatId.value))
    if (snap.exists()) {
      participants.value = snap.data().participants || []
    }
  }

  if (participants.value.length === 1 && !props.isAdmin) {
    const adminsQ = query(collection(db, 'users'), where('role', '==', 'admin'))
    const adminSnap = await getDocs(adminsQ)
    if (!adminSnap.empty) {
      const adminId = adminSnap.docs[0].id
      participants.value.push(adminId)
      await updateDoc(doc(db, 'chats', chatId.value), {
        participants: participants.value,
        [`unread.${adminId}`]: 0
      })
    }
  }

  const otherIds = participants.value.filter(p => p !== me)

  await addDoc(collection(db, 'chats', chatId.value, 'messages'), {
    senderId: me,
    senderName: currentUser.value.displayName || currentUser.value.email,
    text: message.value.trim(),
    timestamp: serverTimestamp(),
    readBy: [me]
  })

  const chatRef = doc(db, 'chats', chatId.value)
  const updateData = {
    lastSenderId: me,
    updatedAt: serverTimestamp(),
    [`unread.${me}`]: 0
  }
  otherIds.forEach(id => {
    updateData[`unread.${id}`] = increment(1)
  })
  await updateDoc(chatRef, updateData)

  message.value = ''
  scrollToBottom()
}

function toggleWithdrawForm() {
  showWithdrawForm.value = !showWithdrawForm.value
}

async function submitWithdraw() {
  if (!chatId.value || !currentUser.value) return

  const uid = currentUser.value.uid
  const text = `
    Country: ${withdrawData.value.country}
    Currency: ${withdrawData.value.currency}
    Bank: ${withdrawData.value.bank}
    Account: ${withdrawData.value.accountNumber}
    Amount: ${withdrawData.value.amount}
  `.trim()

  await addDoc(collection(db, 'chats', chatId.value, 'messages'), {
    senderId: uid,
    senderName: currentUser.value.displayName || currentUser.value.email,
    text,
    type: 'withdraw',
    timestamp: serverTimestamp(),
    readBy: [uid]
  })

  showWithdrawForm.value = false
}

onAuthStateChanged(auth, async (u) => {
  currentUser.value = u
  if (u && !props.isAdmin) {
    // Fetch balance
    const userDoc = await getDoc(doc(db, 'users', u.uid))
    if (userDoc.exists()) {
      withdrawData.value.amount = userDoc.data().balance || 0
    }
    setupChat()
  }
})
</script>

<style scoped>
.withdraw-form {
  background: #fff9e6;
  border: 1px solid gold;
  padding: 10px;
  border-radius: 10px;
  margin: 8px 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.withdraw-actions {
  display: flex;
  gap: 8px;
  margin-top: 5px;
}
.withdraw-message {
  background: #fff0d4;
  border-left: 5px solid orange;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2147483647;
}

.modal-content {
  background: white;
  padding: 1rem;
  border-radius: 12px;
  width: 90%;
  max-width: 520px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 12px 40px rgba(0,0,0,0.25);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: .75rem;
  padding-bottom: .25rem;
  border-bottom: 1px solid #eee;
}

.chat-box {
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  height: 260px;
  overflow-y: auto;
  margin: 1rem 0;
  background: #f9f9f9;
}

.message {
  margin-bottom: 0.5rem;
  padding: 0.6rem;
  border-radius: 8px;
  max-width: 80%;
  word-break: break-word;
}

.my-message {
  background-color: #d1ffd6;
  align-self: flex-end;
}

.other-message {
  background-color: #e0f0ff;
  align-self: flex-start;
}

.input-area {
  display: flex;
  gap: 0.5rem;
}

.input-area input {
  flex: 1;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.input-area button {
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 8px;
  background: #007bff;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}

.input-area button:hover {
  background: #0066d6;
}
.disabled {
  background: gray !important;
  cursor: not-allowed;
  opacity: 0.6;
}

</style>
