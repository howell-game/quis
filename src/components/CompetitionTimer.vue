<template>
  <div class="mini-timer">
    <span class="mini-label">⏳ Competition ends in:</span>
    <span class="mini-time">{{ remaining.days }}d</span>
    <span class="colon">:</span>
    <span class="mini-time">{{ remaining.hours }}h</span>
    <span class="colon">:</span>
    <span class="mini-time">{{ remaining.minutes }}m</span>
    <span class="colon">:</span>
    <span class="mini-time">{{ remaining.seconds }}s</span>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const remaining = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 })
const firstCompetitionStart = new Date('2025-08-04T00:00:00')

function getCurrentCompetitionEnd() {
  const now = new Date()
  const msInWeek = 7 * 24 * 60 * 60 * 1000
  const elapsed = now - firstCompetitionStart
  const weeksPassed = Math.floor(elapsed / msInWeek)
  const currentStart = new Date(firstCompetitionStart.getTime() + weeksPassed * msInWeek)
  return new Date(currentStart.getTime() + msInWeek)
}

function updateCountdown() {
  const end = getCurrentCompetitionEnd()
  const now = new Date()
  const diff = Math.max(0, end - now)

  remaining.value = {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

let interval

onMounted(() => {
  updateCountdown()
  interval = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style scoped>
.mini-timer {
  font-size: 0.85rem;
  color: #f0f0f0;
  background-color: #111; /* black base */
  border: 1px solid #0b3d91; /* blue border */
  padding: 8px 14px;
  margin-bottom: 1rem;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  justify-content: center;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 0 8px rgba(11, 61, 145, 0.4); /* soft blue glow */
}

.mini-label {
  color: #2ecc71; /* green label */
  font-weight: bold;
  margin-right: 8px;
}

.mini-time {
  font-family: monospace;
  font-weight: bold;
  color: #ffa500; /* orange numbers */
}

.colon {
  color: #888;
}
</style>
