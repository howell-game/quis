<template>
  <div class="login-container">
    <div class="login-box">
      <h2>Login</h2>

      <form @submit.prevent="handleLogin">
        <label>Email</label>
        <input type="email" v-model="email" required />

        <label>Password</label>
        <input type="password" v-model="password" required />

        <button type="submit" class="primary-btn">Login</button>
      </form>

      <button class="facebook-btn" @click="handleFacebookLogin">Continue with Facebook</button>

      <p class="signup-link">
        Don’t have an account?
        <router-link to="/signup">Sign up</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useRouter } from "vue-router"
import { signInWithEmailAndPassword, FacebookAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { auth, db } from "@/firebase"

const router = useRouter()
const email = ref("")
const password = ref("")

// 🔹 Email/Password login
const handleLogin = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value)
    router.push("/")
  } catch (err) {
    alert(err.message)
  }
}

// 🔹 Facebook login
const handleFacebookLogin = async () => {
  const provider = new FacebookAuthProvider()
  provider.addScope("email")

  try {
    const result = await signInWithPopup(auth, provider)
    const u = result.user

    await setDoc(
      doc(db, "users", u.uid),
      {
        uid: u.uid,
        name: u.displayName || "",
        email: u.email || "",
        photoURL: u.photoURL || "",
        lastLogin: new Date()
      },
      { merge: true }
    )

    router.push("/")
  } catch (err) {
    const code = err?.code || ""
    if (code === "auth/popup-blocked" || code === "auth/popup-closed-by-user" || code === "auth/web-storage-unsupported") {
      try {
        await signInWithRedirect(auth, provider)
      } catch (redirErr) {
        console.error("Redirect sign-in failed:", redirErr)
        alert("Facebook sign-in failed. Please try again.")
      }
    } else {
      console.error("Facebook login failed:", err)
      alert("Facebook sign-in failed. Please try again.")
    }
  }
}

// 🔹 Handle redirect result (fallback after popup fail)
onMounted(async () => {
  try {
    const result = await getRedirectResult(auth)
    if (result && result.user) {
      const u = result.user
      await setDoc(
        doc(db, "users", u.uid),
        {
          uid: u.uid,
          name: u.displayName || "",
          email: u.email || "",
          photoURL: u.photoURL || "",
          lastLogin: new Date()
        },
        { merge: true }
      )
      router.push("/")
    }
  } catch (err) {
    console.debug("No redirect result or redirect sign-in failed:", err?.code || err)
  }
})
</script>

<style scoped>
.login-container {
  background-color: #eef1f5;
  min-height: 100vh;
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

.login-box {
  background: white;
  padding: 30px;
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;
  text-align: center;
}

.login-box h2 {
  margin-bottom: 20px;
  color: #333;
}

.login-box label {
  display: block;
  text-align: left;
  margin-top: 15px;
  font-weight: bold;
  color: #444;
}

.login-box input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.primary-btn {
  margin-top: 20px;
  width: 100%;
  padding: 12px;
  background-color: #28a745;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.primary-btn:hover {
  background-color: #218838;
}

.facebook-btn {
  margin-top: 10px;
  width: 100%;
  padding: 12px;
  background-color: #4267B2;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.facebook-btn:hover {
  background-color: #365899;
}

.signup-link {
  margin-top: 15px;
  font-size: 14px;
}
</style>
