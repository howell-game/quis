import { ref, onUnmounted } from 'vue'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase'

const user = ref(null)

const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
  user.value = firebaseUser
})

onUnmounted(() => unsubscribe())

export function useAuth() {
  return { user }
}
