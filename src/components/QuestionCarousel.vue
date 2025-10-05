<template>
  <div class="carousel-wrapper">
    <div v-if="filteredQuestions.length > 0 || subtopics.length > 0" class="question-box">
      
      <!-- ✅ Dropdown -->
      <div v-if="subtopics.length" class="dropdown-wrapper">
        <label for="subtopic-select">Select Topic:</label>
        <select id="subtopic-select" v-model="selectedSubtopic">
          <option disabled value="">-- Choose a topic --</option>
          <option v-for="topic in subtopics" :key="topic">{{ topic }}</option>
        </select>
      </div>

      <!-- ✅ Score -->
      <template v-if="showScore">
        <div class="score-box">
          <h2>Your Score</h2>
          <p>{{ score }} / {{ filteredQuestions.length }}</p>
          <p>Percentage: {{ Math.round((score / filteredQuestions.length) * 100) }}%</p>
          <button @click="restartQuiz">Retry</button>
        </div>
      </template>

      <!-- ✅ Questions -->
      <template v-else-if="filteredQuestions.length > 0">
        <div class="question-number">
          Question {{ currentIndex + 1 }} of {{ filteredQuestions.length }}
        </div>

        <h2 class="question-text">{{ currentQuestion.text }}</h2>

        <img
          v-if="currentQuestion.image"
          :src="currentQuestion.image"
          alt="question image"
          class="question-image"
        />

        <div class="answers">
          <button
            v-for="(option, idx) in currentQuestion.options"
            :key="idx"
            :class="getOptionClass(option)"
            @click="handleAnswer(option)"
          >
            {{ option }}
          </button>
        </div>

        <!-- ✅ Explanation Popup -->
        <div
          v-if="showExplanation"
          class="explanation-popup"
        >
          {{ currentQuestion.explanation }}
          <div class="popup-arrow"></div>
        </div>

        <div class="carousel-nav">
          <button @click="goToPrev" :disabled="currentIndex === 0">Previous</button>
          <button
            @click="goToNext"
            :disabled="!selectedAnswer"
            ref="nextButton"
          >
            {{ currentIndex === filteredQuestions.length - 1 ? 'Finish' : 'Next' }}
          </button>
        </div>
      </template>

      <template v-else>
        <div class="text-center text-gray-400">
          <p>Please select a topic.</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const correctSound = new Audio('/sounds/correct.mp3')
const wrongSound = new Audio('/sounds/wrong.mp3')
const route = useRoute()
const topicId = route.params.topicId

const questions = ref([])
const selectedSubtopic = ref('')
const currentIndex = ref(0)
const selectedAnswer = ref(null)
const isCorrect = ref(false)
const score = ref(0)
const showScore = ref(false)
const showExplanation = ref(false)

correctSound.preload = 'auto'
wrongSound.preload = 'auto'

const loadQuestions = async () => {
  try {
    const topicQuestions = await import(`@/questions/${topicId}.js`)
    questions.value = topicQuestions.default
  } catch (error) {
    console.error("No question file found for topic:", topicId, error)
    questions.value = []
  }
}

onMounted(loadQuestions)

const subtopics = computed(() => {
  return [...new Set(questions.value.map(q => q.subtopic))].sort()
})

const filteredQuestions = computed(() => {
  return questions.value.filter(q => q.subtopic === selectedSubtopic.value)
})

const currentQuestion = computed(() => {
  return filteredQuestions.value[currentIndex.value] || {}
})

const handleAnswer = (option) => {
  if (selectedAnswer.value) return

  selectedAnswer.value = option
  isCorrect.value = option === currentQuestion.value.answer

  // ✅ Play sounds
  if (isCorrect.value) {
    score.value++
    correctSound.currentTime = 0
    correctSound.play()
  } else {
    wrongSound.currentTime = 0
    wrongSound.play()
  }

  // ✅ Show explanation popup
  showExplanation.value = true
}

const getOptionClass = (option) => {
  if (!selectedAnswer.value) return 'option'
  if (option === currentQuestion.value.answer) return 'option correct'
  if (option === selectedAnswer.value) return 'option wrong'
  return 'option'
}

const goToNext = () => {
  if (currentIndex.value < filteredQuestions.value.length - 1) {
    currentIndex.value++
    selectedAnswer.value = null
    isCorrect.value = false
    showExplanation.value = false
  } else {
    showScore.value = true
    showExplanation.value = false
  }
}

const goToPrev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
    selectedAnswer.value = null
    isCorrect.value = false
    showExplanation.value = false
  }
}

watch(selectedSubtopic, () => {
  currentIndex.value = 0
  selectedAnswer.value = null
  isCorrect.value = false
  score.value = 0
  showScore.value = false
  showExplanation.value = false
})
const restartQuiz = () => {
  currentIndex.value = 0
  score.value = 0
  selectedAnswer.value = null
  isCorrect.value = false
  showScore.value = false
  showExplanation.value = false
}


</script>

<style scoped>
/* ✅ Popup Styles */
.explanation-popup {
  position: relative;
  background-color: gold;
  color: black;
  padding: 1rem;
  margin: 1rem auto;
  max-width: 80%;
  border-radius: 8px;
  font-size: 0.95rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  text-align: center;
  animation: fadeIn 0.3s ease-in-out;
}

.popup-arrow {
  position: absolute;
  bottom: -10px;
  right: 10px; /* ✅ Pushed to extreme right */
  width: 0; 
  height: 0; 
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid gold;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}
.carousel-wrapper {
  padding: 2rem;
  background-color: #1e1e1e;
  color: yellow;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  
  /* Static background image */
  background-image: url('@/assets/quiz-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; /* Keeps it from moving */
  overflow: hidden;
}

.question-box {
  background: #222;
  padding: 2rem;
  border-radius: 16px;
  width: 90%;
  max-width: 600px;
  text-align: center;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
}

.question-number {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: yellow;
}

.question-text {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.question-image {
  max-width: 100%;
  margin: 1rem 0;
  border-radius: 12px;
}

.answers {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
}

.option {
  background: #444;
  color: yellow;
  padding: 1rem;
  border-radius: 12px;
  font-size: 1.1rem;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  cursor: pointer;
}

.option:hover {
  background: #555;
}

.correct {
  border-color: #00ff7f;
  background-color: #004d00;
}

.wrong {
  border-color: #ff4d4f;
  background-color: #330000;
}

.carousel-nav {
  display: flex;
  justify-content: space-between;
}

.carousel-nav button {
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  background: #008080;
  color: white;
  cursor: pointer;
  transition: 0.2s;
}

.carousel-nav button:disabled {
  background: #555;
  cursor: not-allowed;
}

.dropdown-wrapper {
  margin-bottom: 1.5rem;
  text-align: left;
}

.dropdown-wrapper label {
  display: block;
  font-size: 0.95rem;
  color: #e238c9ff;
  margin-bottom: 0.3rem;
}

.dropdown-wrapper select {
  width: 100%;
  background-color: #333;
  color: #fff;
  border: 1px solid #555;
  border-radius: 8px;
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  cursor: pointer;
  transition: border-color 0.3s, background-color 0.3s;
  box-sizing: border-box;
}

.dropdown-wrapper select:hover {
  border-color: #888;
}

.dropdown-wrapper select:focus {
  outline: none;
  border-color: #00ff7f;
  background-color: #222;
}
.score-box {
  background: #222;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  color: yellow;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
}
.score-box h2 {
  color: gold;
  margin-bottom: 1rem;
}
.score-box button {
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  background: teal;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

</style>
