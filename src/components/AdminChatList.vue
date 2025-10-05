<template>
  <div class="admin-chat-list">
    <h2>All Chats</h2>
    <ul v-if="users.length">
      <li 
        v-for="u in users" 
        :key="u.id" 
        @click="openChatWith(u.id, u.chatId)"
      >
        <span class="user-name">{{ u.name || 'Unknown User' }}</span>
        <span v-if="u.unreadCount > 0" class="unread-badge">{{ u.unreadCount }}</span>
      </li>
    </ul>
    <p v-else>No chats found</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { collection, query, where, onSnapshot, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import { auth, db } from '@/firebase'

const emit = defineEmits(['chat-selected'])
const users = ref([])

onMounted(() => {
  const currentUserId = auth.currentUser.uid

  const q = query(
    collection(db, "chats"),
    where("participants", "array-contains", currentUserId)
  )

  onSnapshot(q, async (chatsSnap) => {
    const tempUsers = []
    for (const chatDoc of chatsSnap.docs) {
      const chatData = chatDoc.data()
      const otherUserId = chatData.participants.find(p => p !== currentUserId)

      if (otherUserId) {
        const userSnap = await getDoc(doc(db, "users", otherUserId))
        const userData = userSnap.exists() ? userSnap.data() : {}

        tempUsers.push({
          id: otherUserId,
          chatId: chatDoc.id,
          ...userData,
          unreadCount: chatData.unread?.[currentUserId] || 0
        })
      }
    }
    users.value = tempUsers
  })
})

async function openChatWith(userId, chatId) {
  const currentUserId = auth.currentUser.uid

  if (chatId) {
    await updateDoc(doc(db, "chats", chatId), {
      [`unread.${currentUserId}`]: 0
    })
    emit('chat-selected', chatId)
  }
}
</script>

<style scoped>
.admin-chat-list {
  padding: 1rem;
  background: #fafafa;
  border-right: 1px solid #ddd;
  height: 100%;
}

.admin-chat-list h2 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
}

.admin-chat-list ul {
  list-style: none;
  padding: 0;
}

.admin-chat-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 0.8rem;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: background 0.2s ease;
}

.admin-chat-list li:hover {
  background: #f0f0f0;
}

.user-name {
  font-size: 0.95rem;
}

.unread-badge {
  background: red;
  color: white;
  padding: 0.25rem 0.6rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: bold;
}
</style>
