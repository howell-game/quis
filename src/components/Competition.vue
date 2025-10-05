<template>
  <div class="carousel-wrapper">
    <!-- keep your existing question UI, only hide when result card shows -->
    <div class="question-box" v-if="questions.length > 0 && !showResultCard">
      <CompetitionTimer />
      <div class="timer">Time Spent: {{ timeSpent }}s</div>

      <div class="question-number">Question {{ currentIndex + 1 }} of {{ questions.length }}</div>

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

      <div class="carousel-nav">
        <button @click="goToPrev" :disabled="currentIndex === 0">Previous</button>
        <button
          @click="goToNext"
          :disabled="!isCorrect || currentIndex === questions.length - 1"
        >
          Next
        </button>
      </div>
    </div>

    <div v-else-if="showResultCard" class="result-overlay">
      <!-- Result Card (snapshot target) -->
      <div class="result-card" id="result-card">
        <img src="@/assets/quiz-result.png" alt="quiz result" class="result-image" />
        <h3 class="result-topic">{{ topicTitle }}</h3>

        <div class="result-stats">
          <div class="stat">
            <span class="label">Answered</span>
            <span class="value">{{ totalAnswered }}</span>
          </div>
          <div class="stat">
            <span class="label">Correct</span>
            <span class="value">{{ correct }}</span>
          </div>
          <div class="stat">
            <span class="label">Percentage</span>
            <span class="value">{{ percentage }}%</span>
          </div>
        </div>

        <p class="result-tagline">“I scored {{ correct }}, bet you can’t beat me!”</p>
       
        <button @click="shareResult" class="share-btn">Share</button>
        <button @click="closeResult" class="close-btn">Close</button>
      </div>
    </div>

    <div v-else class="text-center text-gray-400">
      <p>No questions available for this topic.</p>
    </div>
  </div>
</template>

<script setup>
import { getFirestore, doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '@/firebase'
import { increment } from "firebase/firestore";
import CompetitionTimer from '@/components/CompetitionTimer.vue'
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { onBeforeUnmount } from 'vue'
import html2canvas from "html2canvas";

const route = useRoute()
const topicId = route.params.topicId
const correctSound = new Audio('/sounds/correct.mp3')
const wrongSound = new Audio('/sounds/wrong.mp3')
const questions = ref([])
const currentIndex = ref(0)
const selectedAnswer = ref(null)
const isCorrect = ref(false)
const user = ref(null)
const userDocRef = ref(null)
const questionNo = ref([])  // holds answered question indices
const timeSpent = ref(0) // total seconds already spent

// ✅ new: local correct counter (to show on card) + result-card toggle
const correct = ref(0)
const showResultCard = ref(false)

let timerInterval = null

// Optional: reduce latency by preloading
correctSound.preload = 'auto'
wrongSound.preload = 'auto'

// ✅ topic title/description map for the card headline
const topicTitles = {
  messi: "How well do you know Lionel Messi?",
  biology: "Biology Knowledge Challenge",
  history: "History Knowledge Challenge",
  english: "English Mastery Quiz",
  chemistry: "Chemistry Knowledge Test",
  economics: "Economics Quiz",
}
const topicTitle = computed(() => topicTitles[topicId] || "Quiz Challenge")

onAuthStateChanged(auth, async (u) => {
  if (!u) return;

  user.value = u;
  userDocRef.value = doc(db, 'users', u.uid);

  const snap = await getDoc(userDocRef.value);
  if (snap.exists()) {
    const data = snap.data();

    // Restore answered questions
    questionNo.value = data.questionNo || [];

    // Restore saved time
    timeSpent.value = data.timeSpent || 0;

    // ✅ Restore correct count if present in Firestore
    correct.value = data.correct || 0;

    // Jump to last answered question
    if (questionNo.value.length > 0) {
      currentIndex.value = questionNo.value[questionNo.value.length - 1];
    }
  }
});

// Load hardcoded question file
const loadQuestions = async () => {
  try {
    const topicQuestions = await import(`@/questions/${topicId}.js`)
    questions.value = topicQuestions.default
  } catch (error) {
    console.error("No question file found for topic:", topicId, error)
    questions.value = []
  }
}

const startTimer = () => {
  if (timerInterval) return // Prevent multiple intervals
  timerInterval = setInterval(() => {
    timeSpent.value += 1
  }, 1000)
}

onMounted(() => {
  loadQuestions()
  startTimer()
})

onBeforeUnmount(async () => {
  stopTimer()
  if (userDocRef.value) {
    await updateDoc(userDocRef.value, {
      timeSpent: timeSpent.value
    })
  }
})

const stopTimer = () => {
  if (timerInterval) {
    clearInterval(timerInterval)
    timerInterval = null
  }
}

window.addEventListener('beforeunload', async () => {
  stopTimer()
  if (userDocRef.value) {
    await updateDoc(userDocRef.value, {
      timeSpent: timeSpent.value
    })
  }
})

const currentQuestion = computed(() => questions.value[currentIndex.value] || {})

// ✅ computed for the card
const totalAnswered = computed(() => questionNo.value.length)
const percentage = computed(() =>
  totalAnswered.value ? Math.round((correct.value / totalAnswered.value) * 100) : 0
)

const handleAnswer = async (option) => {
  const index = currentIndex.value;

  const alreadyAnswered = questionNo.value.includes(index);
  selectedAnswer.value = option;
  isCorrect.value = option === currentQuestion.value.answer;

  // 🎵 Play sound immediately
  if (isCorrect.value) {
    correctSound.currentTime = 0
    correctSound.play()
  } else {
    wrongSound.currentTime = 0
    wrongSound.play()
  }

  if (!alreadyAnswered && userDocRef.value) {
    try {
      const updateData = {
        questionNo: arrayUnion(index),
        question: questionNo.value.length + 1 // total answered so far
      };

      if (isCorrect.value) {
        updateData.correct = increment(1);
      }

      await updateDoc(userDocRef.value, updateData);

      // Update local state
      questionNo.value.push(index);
      if (isCorrect.value) {
        correct.value += 1; // ✅ keep local tally for card
      }

      console.log("Firestore updated:", updateData);
    } catch (err) {
      console.error("Error updating Firestore:", err);
    }
  } else {
    console.log("Already answered or no user.");
  }

  // ✅ If this was the last question, show the result card
  if (currentIndex.value === questions.value.length - 1) {
    // tiny delay so correct/wrong highlight is visible
    setTimeout(() => {
      showResultCard.value = true
      stopTimer()
    }, 450)
  }
};

const getOptionClass = (option) => {
  if (!selectedAnswer.value) return 'option'
  if (option === currentQuestion.value.answer) return 'option correct'
  if (option === selectedAnswer.value) return 'option wrong'
  return 'option'
}

const goToNext = () => {
  if (currentIndex.value < questions.value.length - 1) {
    currentIndex.value++
    selectedAnswer.value = null
    isCorrect.value = false
  }
}

const goToPrev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
    selectedAnswer.value = null
    isCorrect.value = false
  }
}

const closeResult = () => {
  showResultCard.value = false

  // ✅ Option A: send them back to homepage
  window.location.href = "/"

  // ✅ Option B: if using Vue Router (safer in SPA)
  // import { useRouter } from 'vue-router'
  // const router = useRouter()
  // router.push({ name: 'HomePage' })
}

const shareResult = async () => {
  const card = document.getElementById("result-card");
  if (!card) return;

  try {
    // 1️⃣ Capture result card as image
    const canvas = await html2canvas(card, { useCORS: true });
    const dataUrl = canvas.toDataURL("image/png");
    const base64Image = dataUrl.replace(/^data:image\/png;base64,/, "");

    // 2️⃣ FBInstant share (if inside Instant Games)
    if (window.FBInstant) {
      await window.FBInstant.shareAsync({
        intent: "SHARE",
        image: base64Image,
        text: `🔥 I scored ${correct.value}/${totalAnswered.value} in ${topicTitle.value}! Can you beat me?`,
        data: { score: correct.value, topic: topicId }
      });
      console.log("Shared successfully on FBInstant!");
      return;
    }

    // 3️⃣ Mobile Web Share API
    if (navigator.share) {
      const blob = await (await fetch(dataUrl)).blob();
      await navigator.share({
        title: `I scored ${correct.value}/${totalAnswered.value}!`,
        text: `🔥 I scored ${correct.value}/${totalAnswered.value} in ${topicTitle.value}! Can you beat me?`,
        files: [blob]
      });
      console.log("Shared successfully via Web Share API!");
      return;
    }

    // 4️⃣ Fallback for desktop: download + WhatsApp share
    // Download the image
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = `quiz_result_${topicId}.png`;
    link.click();

    // Optional: open WhatsApp share link
    const shareText = encodeURIComponent(`🔥 I scored ${correct.value}/${totalAnswered.value} in ${topicTitle.value}! Can you beat me?`);
    window.open(`https://wa.me/?text=${shareText}`, "_blank");

    alert("Result downloaded! You can also share it on WhatsApp.");
  } catch (err) {
    console.error("Error sharing result:", err);
    alert("Failed to share result. Try again.");
  }
};


</script>

<style scoped>

.share-btn {
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  background: #1877f2;
  color: white;
  cursor: pointer;
  transition: 0.2s;
}

.share-btn:hover {
  background: #145db2;
}

.carousel-wrapper {
  padding: 2rem;
  background-color: #1e1e1e;
  color: #fff;
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
  color: #ccc;
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
  margin-bottom: 2rem;
}

.option {
  background: #444;
  color: #fff;
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

/* ✅ Result overlay + card (non-intrusive) */
.result-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
}

.result-card {
  width: 90%;
  max-width: 560px;
  background: #71801cff;
  color: #fff;
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  box-shadow: 0 12px 30px rgba(153, 112, 112, 0.45);
}

.result-image {
  width: 120px;
  height: 120px;
  border-radius: 14px;
  object-fit: cover;
  margin: 0 auto 16px;
}

.result-topic {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.result-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin: 14px 0 8px;
}

.stat {
  background: #1d1c1cff;
  border-radius: 12px;
  padding: 12px 8px;
}

.stat .label {
  display: block;
  font-size: 0.8rem;
  color: yellow;
  margin-bottom: 4px;
}

.stat .value {
  font-size: 1.25rem;
  font-weight: 700;
}

.result-tagline {
  margin-top: 10px;
  font-style: italic;
  color: #ddd;
}

.close-btn {
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  background: #fcf6f6ff;
  color: #333;
  cursor: pointer;
  transition: 0.2s;
}

.close-btn:hover {
  background: #999;
}


</style>
