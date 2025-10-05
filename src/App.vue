<template>
  <div class="min-h-screen bg-base text-dark font-sans flex flex-col">
    <!-- Navbar -->
    <Navbar />

    <!-- Main content -->
    <div class="container mx-auto p-4 flex-grow">
      <router-view />
    </div>

    <!-- Footer -->
    <footer class="footer-bar">
      <p>&copy; {{ new Date().getFullYear() }} Howell. All rights reserved.</p>
      <router-link to="/policies" class="footer-link">Policies</router-link>
    </footer>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import { onAuthStateChanged, FacebookAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { auth, db } from "@/firebase"
import { useRouter } from "vue-router"

const router = useRouter()
const isInstantGame = typeof FBInstant !== "undefined" // detect Instant Games

// Auth check for web users
onAuthStateChanged(auth, async (user) => {
  if (user) {
    router.push("/") // already logged in
  } else if (isInstantGame) {
    // Only auto-login if inside Instant Games
    const provider = new FacebookAuthProvider()
    await signInWithRedirect(auth, provider)
  } else {
    // Not in Instant Games → let user choose Signup/Login manually
    console.log("Web user, no auto-login")
  }
})

// Handle FB login redirect results
getRedirectResult(auth)
  .then(async (result) => {
    if (result?.user) {
      const user = result.user
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: user.displayName || "",
        email: user.email,
        photoURL: user.photoURL || "",
        lastLogin: new Date(),
      }, { merge: true })

      router.push("/")
    }
  })
  .catch(err => console.error("FB Redirect Login Error:", err))
</script>

<style>
body {
  font-family: 'Segoe UI', sans-serif;
}

/* Footer bar styling */
.footer-bar {
  background-color: rgb(6, 8, 33);
  color: white;
  padding: 0rem;
  text-align: center;        /* center content */
  display: flex;
  flex-direction: column;    /* stack copyright & link */
  gap: 0.5rem;               /* space between lines */
  font-size: 0.9rem;
  border-top: 2px solid #005fa3;
}

.footer-link {
  color: #fff;
  text-decoration: underline;
  font-weight: bold;
}

.footer-link:hover {
  color: #cce5ff;
}
</style>
