<template>
  <div class="user-chat">
    <div class="messages">
      <div 
        v-for="m in messages" 
        :key="m.id" 
        class="message"
      >
        <b>{{ m.senderId === currentUserId ? 'Me' : 'Them' }}:</b> {{ m.text }}
      </div>
    </div>

    <form @submit.prevent="sendMessage">
      <input v-model="text" placeholder="Type a message..." />
      <button>Send</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { 
  collection, query, orderBy, onSnapshot, addDoc, serverTimestamp 
} from 'firebase/firestore'
import { auth, db } from '@/firebase'

const props = defineProps({
  chatId: String
})

const text = ref("")
const messages = ref([])
const currentUserId = auth.currentUser.uid

onMounted(() => {
  const messagesRef = collection(db, "chats", props.chatId, "messages")
  const q = query(messagesRef, orderBy("createdAt"))
  onSnapshot(q, snap => {
    messages.value = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
})

async function sendMessage() {
  if (!text.value.trim()) return
  const messagesRef = collection(db, "chats", props.chatId, "messages")
  await addDoc(messagesRef, {
    senderId: currentUserId,
    text: text.value,
    createdAt: serverTimestamp()
  })
  text.value = ""
}
</script>
