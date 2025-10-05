<template>
  <div class="homepage">
    <!-- Chat icon -->
    <div 
  v-if="user" 
  class="chat-icon-container" 
  @click="isChatOpen = true"
>
  <i class="fas fa-comments"></i>
  <span v-if="hasUnread" class="unread-dot"></span>
</div>


    <!-- Chat modal -->
    <ChatModal 
      v-if="isChatOpen" 
      :isAdmin="userRole === 'admin'" 
      @close="isChatOpen = false" 
    />

    <div class="welcome-box">
      <h1 class="main-title">Welcome to the Howell</h1>
      <p v-if="user" class="user-greeting">Hello, {{ user.displayName || user.email }}</p>
      <p v-else class="user-greeting">Please log in</p>

      <p class="description">
        Test your knowledge across subjects, people, and world events.<br />
        Learn while having fun!
      </p>
      <div class="button-group">
  <!-- Explore Topics (for logged-in users) -->
  <router-link v-if="user" to="/topics">
    <button class="btn green">Explore Topics</button>
  </router-link>

  <!-- Get Started (for visitors) -->
  <router-link v-else to="/topics">
    <button class="btn blue">Get Started</button>
  </router-link>

  <!-- Privacy & Rules -->
  <button class="btn orange" @click="showRules = true">Privacy & Rules</button>
</div>


      
    </div>
    <RulesModal :open="showRules" @close="showRules = false" />
  </div>
</template>

<script setup>
import RulesModal from '@/components/RulesModal.vue'
import { ref } from 'vue'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '@/firebase'
import { getDoc, doc, collection, query, where, onSnapshot } from 'firebase/firestore'
import ChatModal from '@/components/ChatModal.vue'
import { isChatOpen } from '@/stores/chatModal'  // ✅ Import shared state

const showRules = ref(false)
const hasUnread = ref(false)
const user = ref(null)
const userRole = ref(null)

onAuthStateChanged(auth, async (u) => {
  user.value = u
  if (u) {
    const snap = await getDoc(doc(db, "users", u.uid))
    userRole.value = snap.data()?.role || "user"
    checkUnreadMessages(u.uid)
  }
})

function checkUnreadMessages(uid) {
  const q = query(
    collection(db, 'chats'),
    where('participants', 'array-contains', uid)
  )

  onSnapshot(q, (snapshot) => {
    let unread = false
    snapshot.forEach(docSnap => {
      const data = docSnap.data()
      if ((data.unread?.[uid] || 0) > 0) {
        unread = true
      }
    })
    hasUnread.value = unread
  })
}
</script>



<style scoped>
.homepage {
  background-color: #cdcd97ff; /* Soft off-white */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem;
  min-height: 100vh;
 
}

.welcome-box {
  background-color: #e6e0baff;
  padding: 3rem;
  border-radius: 18px;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
  max-width: 700px;
  width: 100%;
  color: #222;
  border: 2px solid #e8f0f9;
}
.welcome-box {
  background-color: rgba(230, 224, 186, 0.5); /* 50% transparent version of your original color */
  padding: 3rem;
  border-radius: 18px;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
  max-width: 700px;
  width: 100%;
  color: #222;
  border: 2px solid rgba(232, 240, 249, 0.5); /* match transparency */
  position: relative;
  z-index: 1;
}


.main-title {
  font-size: 2.8rem;
  font-weight: 700;
  color: #04304fff; /* Medium blue */
  margin-bottom: 1.2rem;
}

.user-greeting {
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
  color: #444;
}

.description {
  font-size: 1.15rem;
  margin-bottom: 2.5rem;
  color: #0b0909ff;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Buttons */
.btn {
  padding: 0.8rem 1.6rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #222;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.btn.orange {
  background-color: #ffe8cc;
}

.btn.orange:hover {
  background-color: #ffd8a8;
}

.btn.green {
  background-color: #d9fdd3;
}

.btn.green:hover {
  background-color: #c0f5b8;
}


<style scoped>
.navbar {
  background-color: #060821;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.homepage {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  min-height: 100vh;

  /* Static background image */
  background-image: url('@/assets/quiz-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; /* Keeps it from moving */
  overflow: hidden;
}

/* Optional: light overlay to make text readable */
.homepage::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.05); /* slight fade */
  z-index: 0;
}

.welcome-box {
  position: relative;
  z-index: 1;
}

.chat-icon-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: gold;
  color: white;
  padding: 15px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  z-index: 9999; /* Make sure it’s on top */
}
.btn.blue {
  background-color: #cce5ff;
}

.btn.blue:hover {
  background-color: #b3d8ff;
}


.unread-dot {
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: red;
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

</style>
