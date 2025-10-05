
<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Logo -->
      <router-link to="/" class="logo">QuizGames</router-link>

      <!-- Mobile toggle -->
      <button class="menu-toggle" @click="toggleMenu">☰</button>

      <!-- Nav links -->
      <div :class="['nav-links', { open: isMenuOpen }]">
        <!-- Home -->
        <router-link to="/" @click="closeMenu" class="nav-link">Home</router-link>

        <!-- Leaderboard Dropdown -->
        <div class="dropdown nav-item" ref="dropdownRef">
          <button @click="toggleLeaderboard" class="nav-link dropdown-btn">
            Leaderboard ⏷
          </button>
          <div v-if="showLeaderboard" class="dropdown-content">
            <table>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Score</th>
                  <th>Correct</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(player, index) in topPlayers"
                  :key="player.id"
                  :class="{ highlight: player.id === user?.uid }"
                >
                  <td>{{ index + 1 }}</td>
                  <td>{{ player.name }}</td>
                  <td>{{ player.score }}</td>
                  <td>{{ player.correct }}</td>
                  <td>{{ player.timeSpent }}</td>
                </tr>
                <tr v-if="currentUserRank > 10" class="highlight">
                  <td>{{ currentUserRank }}</td>
                  <td>{{ currentUser?.name }}</td>
                  <td>{{ currentUser?.score }}</td>
                  <td>{{ currentUser?.correct }}</td>
                  <td>{{ currentUser?.timeSpent }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Auth links -->
        <template v-if="!user">
  <router-link to="/login" @click="closeMenu" class="nav-link">Login</router-link>
  <router-link to="/signup" @click="closeMenu" class="nav-link">Sign Up</router-link>
</template>

        <template v-else>
          <!-- Reset Button -->
          <button
            v-if="userRole === 'admin'"
            :disabled="isResetDisabled"
            :class="resetBtnClass"
            @click="handleReset"
          >
            Reset
          </button>

          <!-- Reward Button -->
<div class="reward-container" ref="rewardRef">
  <button class="reward-btn" @click="toggleRewardDropdown">
    Reward ⏷
  </button>
  <div v-if="rewardDropdownOpen" class="reward-dropdown">
    <p><strong>Wins:</strong> {{ balance ?? 'Loading...' }} coins</p>
    
  </div>
</div>

          <!-- Topics -->
          <router-link to="/topics" @click="closeMenu" class="nav-link">Topics</router-link>

          <!-- Logout -->
          <button class="nav-link logout-btn" @click="handleLogout">Logout</button>
        </template>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { getDoc, query, where, getDocs, increment, doc, updateDoc, deleteField, writeBatch, collection, onSnapshot, setDoc, serverTimestamp, Timestamp } from 'firebase/firestore'
import { useAuth } from '@/composables/useAuth'
import { auth, db } from '@/firebase'
import { signOut, getAuth, onAuthStateChanged  } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { isChatOpen } from '@/stores/chatModal' // ✅ Import shared state
const { user } = useAuth()
const router = useRouter()
const rewardDropdownOpen = ref(false)
const rewardRef = ref(null)

const isMenuOpen = ref(false)
const showLeaderboard = ref(false)
const dropdownRef = ref(null)
const userRole = ref(null)
const dropdownOpen = ref(false)
const balance = ref(null)
const userId = ref(null)

const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value }
const closeMenu = () => { isMenuOpen.value = false }

onMounted(async () => {
  if (user.value) {
    const userDoc = await getDoc(doc(db, 'users', user.value.uid))
    if (userDoc.exists()) {
      userRole.value = userDoc.data().role
    }
  }
})

const toggleLeaderboard = () => {
  showLeaderboard.value = !showLeaderboard.value
}

const handleLogout = async () => {
  await signOut(auth)
  closeMenu()
  router.push('/')
}

// Leaderboard logic
const topPlayers = ref([])
const currentUser = ref(null)
const currentUserRank = ref(null)

onMounted(() => {
  const usersRef = collection(db, 'users')

  onSnapshot(usersRef, async (snapshot) => {
    const players = snapshot.docs.map(docSnap => {
      const data = docSnap.data()
      const rawScore = data.correct * 10 - data.timeSpent / 60
      const roundedScore = Math.round(rawScore)

      const minutes = Math.floor((data.timeSpent || 0) / 60)
      const seconds = (data.timeSpent || 0) % 60
      const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`

      return {
        id: docSnap.id,
        name: data.name || 'Unknown',
        score: roundedScore,
        correct: data.correct || 0,
        timeSpent: formattedTime
      }
    })

    players.sort((a, b) =>
      b.score - a.score || b.correct - a.correct || a.timeSpent.localeCompare(b.timeSpent)
    )

    const topTen = players.slice(0, 10)
    topPlayers.value = topTen

    const topTenIds = new Set(topTen.map(p => p.id))
    const batch = writeBatch(db)

    snapshot.docs.forEach((docSnap) => {
      const userId = docSnap.id
      const userData = docSnap.data()
      const userRef = doc(db, 'users', userId)

      if (topTenIds.has(userId)) {
        const rank = topTen.findIndex(p => p.id === userId) + 1
        if (userData.rank !== rank) {
          batch.update(userRef, { rank })
        }
      } else {
        if (userData.rank !== undefined) {
          batch.update(userRef, { rank: deleteField() })
        }
      }
    })

    await batch.commit()

    const current = players.find(p => p.id === user.value?.uid)
    if (current) {
      currentUserRank.value = players.findIndex(p => p.id === current.id) + 1
      currentUser.value = {
        ...current,
        score: Math.round(current.score),
        timeSpent: current.timeSpent
      }
    } else {
      currentUserRank.value = null
      currentUser.value = null
    }
  })
})

// Close dropdown when clicking outside
const handleClickOutside = (e) => {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    showLeaderboard.value = false
  }
}
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

/* -------------------------
   RESET BUTTON DISABLE LOGIC
------------------------- */
const isResetDisabled = ref(false)
const lastReset = ref(null)

const checkResetStatus = async () => {
  const resetDoc = await getDoc(doc(db, 'settings', 'resetMeta'))
  if (resetDoc.exists()) {
    lastReset.value = resetDoc.data().lastReset
    const now = Date.now()
    const lastTime = lastReset.value instanceof Timestamp
      ? lastReset.value.toMillis()
      : lastReset.value

    const oneWeekMs = 7 * 24 * 60 * 60 * 1000
    isResetDisabled.value = (now - lastTime) < oneWeekMs
  }
}

onMounted(() => {
  checkResetStatus()
})

const handleReset = async () => {
  if (isResetDisabled.value) return

  try {
    const usersRef = collection(db, 'users')

    // Fetch all users
    const allUsersSnap = await getDocs(usersRef)
    const batch = writeBatch(db)

    // Step 1: Reset ALL balances to 0
    allUsersSnap.forEach(docSnap => {
      const userRef = doc(db, 'users', docSnap.id)
      batch.update(userRef, { balance: 0 })
    })

    // Step 2: Find rank 1 users and credit 20 coins
    const q = query(usersRef, where('rank', '==', 1))
    const winnersSnap = await getDocs(q)
    winnersSnap.forEach(docSnap => {
      const userRef = doc(db, 'users', docSnap.id)
      batch.update(userRef, { balance: 20 }) // Overwrite with 20
    })

    // Step 3: Reset quiz stats for ALL users
    allUsersSnap.forEach(docSnap => {
      const userRef = doc(db, 'users', docSnap.id)
      batch.update(userRef, {
        correct: 0,
        question: 0,
        timeSpent: 0,
        questionNo: []
      })
    })

    await batch.commit()

    // Save timestamp for cooldown
    await setDoc(doc(db, 'settings', 'resetMeta'), {
      lastReset: serverTimestamp()
    })

    isResetDisabled.value = true
    alert('Reset complete! All balances cleared, winner credited, and stats reset.')

  } catch (error) {
    console.error('Error during reset:', error)
    alert('Error occurred during reset. Check console.')
  }
}


// Button class based on state
const resetBtnClass = computed(() =>
  isResetDisabled.value ? 'reset-btn-blue' : 'reset-btn-red'
)

watch(user, async (newUser) => {
  if (newUser) {
    const userDoc = await getDoc(doc(db, 'users', newUser.uid))
    if (userDoc.exists()) {
      userRole.value = userDoc.data().role
    }
  } else {
    userRole.value = null
  }
}, { immediate: true })


let unsubscribeBalance = null

// Real-time balance listener
const startBalanceListener = (uid) => {
  const balanceRef = doc(db, 'users', uid)
  unsubscribeBalance = onSnapshot(balanceRef, (snapshot) => {
    if (snapshot.exists()) {
      balance.value = snapshot.data().balance || 0
    } else {
      balance.value = 0
    }
  })
}

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      userId.value = user.uid
      startBalanceListener(user.uid)
    }
  })
})

onUnmounted(() => {
  if (unsubscribeBalance) unsubscribeBalance()
})


const toggleRewardDropdown = () => {
  rewardDropdownOpen.value = !rewardDropdownOpen.value
}

const closeRewardDropdown = () => {
  rewardDropdownOpen.value = false
}

// Close reward dropdown if clicking outside
const handleClickOutsideReward = (e) => {
  if (rewardRef.value && !rewardRef.value.contains(e.target)) {
    closeRewardDropdown()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutsideReward)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutsideReward)
})

const goToWithdraw = () => {
  isChatOpen.value = true // ✅ Open modal globally
  closeRewardDropdown()
}

</script>


<style scoped>
/* Navbar base */
.navbar {
  background-color: rgb(6, 8, 33);
  color: white;
  padding: 1.2rem 2rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.logo {
  font-size: 2rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.menu-toggle {
  display: none;
  font-size: 1.8rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  font-size: 1.1rem;
  color: white;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 0;
}

.nav-link:hover {
  color: #ffd700;
}

/* Leaderboard dropdown */
.dropdown {
  position: relative;
}

.dropdown-btn {
  font: inherit;
}

.dropdown-content {
  position: absolute;
  background-color: white;
  color: black;
  padding: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  z-index: 100;
  top: 100%;
  right: 0;
  border-radius: 6px;
  overflow-x: auto;
}

.dropdown-content table {
  min-width: 300px;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.dropdown-content th,
.dropdown-content td {
  padding: 0.4rem 0.5rem;
  text-align: left;
  white-space: nowrap;
}

.highlight {
  background-color: #fff4a3;
}

/* Reset buttons */
.reset-btn-red {
  background-color: red;
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 4px;
}

.reset-btn-blue {
  background-color: blue;
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 4px;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.85;
}

/* Responsive */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }
  .nav-links {
    width: 100%;
    flex-direction: column;
    gap: 1.2rem;
    margin-top: 1rem;
    display: none;
  }
  .nav-links.open {
    display: flex;
  }
  .dropdown-content {
    position: static;
    width: 80%;
    max-width: none;
    margin-top: 0.5rem;
  }
}

.highlight {
  background-color: #fff4a3;
}
.reward-container {
  position: relative;
  display: inline-block;
  font-weight: bold;
}

.reward-btn {
  background: linear-gradient(45deg, #FFD700, #FFC107);
  border: none;
  color: #3b2f00;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 0 8px #FFD700AA;
  transition: background 0.3s ease;
}

.reward-btn:hover {
  background: linear-gradient(45deg, #FFC107, #FFB300);
}

.reward-dropdown {
  position: absolute;
  top: 110%;
  right: 0;
  background: #fff8dc;
  border: 2px solid #FFD700;
  border-radius: 10px;
  padding: 1rem 1.2rem;
  box-shadow: 0 0 12px #FFD700CC;
  min-width: 180px;
  z-index: 150;
  color: #664d00;
  font-weight: 600;
}

.reward-dropdown p {
  margin: 0 0 0.5rem 0;
}

.reward-dropdown a {
  color: #b8860b;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 700;
}

.reward-dropdown a:hover {
  color: #ffca28;
}


</style>