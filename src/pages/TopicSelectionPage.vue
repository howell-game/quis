<template>
  <div class="page-container">
    <h2 class="page-title">Select a Topic</h2>

    <!-- 🔹 Login Notice -->
    <div v-if="!user" class="login-notice">
      <p>Login to participate in competition</p>
    </div>

    <div class="topic-grid">
      <div
        v-for="topic in sortedTopics"
        :key="topic.id"
        class="topic-card"
        :style="{ backgroundColor: getCardColor(topic.id) }"
      >
        <div class="topic-header">
          <h3 class="topic-title">{{ topic.title }}</h3>
          <span v-if="topic.isCompetition" class="competition-badge">Competition</span>
        </div>

        <p class="topic-description">{{ topic.description }}</p>

        <!-- 🔹 Restrict access to competition topics if not logged in -->
        <router-link
          v-if="!topic.isCompetition || user"
          :to="getTopicRoute(topic)"
        >
          <button class="play-button">Play Now</button>
        </router-link>

        <button
          v-else
          class="play-button disabled"
          disabled
          title="Login to participate"
        >
          Play Now
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase'

const user = ref(null)

onAuthStateChanged(auth, (u) => {
  user.value = u
})

const topics = [
  {
    id: "messi",
    title: "Lionel Messi",
    description: "How well do you know Li@nel M6ssi?",
    isCompetition: true,
  },
  {
    id: "biology",
    title: "Biology",
    description: "Test your knowledge of life, cells, plants, and more.",
  },
  {
    id: "history",
    title: "History",
    description: "Learn from the past to win the present!",
  },
  {
    id: "english",
    title: "English",
    description: "Master vocabulary, grammar, and comprehension.",
  },
  {
    id: "chemistry",
    title: "Chemistry",
    description: "How well do you know chemistry.",
  },
  {
    id: "economics",
    title: "Economics",
    description: "Supply, demand, money & the markets!",
  },
]

const getTopicRoute = (topic) => {
  return topic.isCompetition
    ? `/competition/${topic.id}`
    : `/play/${topic.id}`
}

const sortedTopics = computed(() => {
  return [...topics].sort((a, b) => {
    if (a.isCompetition && !b.isCompetition) return -1
    if (!a.isCompetition && b.isCompetition) return 1
    return 0
  })
})

const getCardColor = (id) => {
  const colors = {
    messi: '#007BFF',
    biology: '#28A745',
    maths: '#73ae50ff',
    history: '#343A40',
    english: '#6C757D',
    economics: '#17A2B8',
    chemistry: '#0a3238ff',
  }
  return colors[id] || '#007BFF'
}
</script>

<style scoped>

.page-container {
  background-size: cover;
  padding: 60px 20px;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
  position: relative;

  /* Static background image */
  background-image: url('@/assets/quiz-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; /* Keeps it from moving */
  overflow: hidden;
}

.page-container::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 10, 30, 0.6);
  z-index: -1;
}

.page-title {
  color: #1bc435ff;
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 40px;
}

/* 🔹 Login notice banner */
.login-notice {
  text-align: center;
  background-color: #ffefc2;
  color: #222;
  padding: 12px 18px;
  border-radius: 10px;
  margin-bottom: 30px;
  font-weight: bold;
}

.topic-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.topic-card {
  color: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.topic-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.topic-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.topic-title {
  font-size: 22px;
  font-weight: 700;
  color: white;
}

.topic-description {
  font-size: 16px;
  margin-bottom: 20px;
  color: white;
}

.play-button {
  background-color: #f9f9f8ff;
  border: none;
  color: #000;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.play-button:hover {
  background-color: #cdcd97ff;
}

.play-button.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.competition-badge {
  background-color: #FD7E14;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 6px 10px;
  border-radius: 20px;
}
</style>
