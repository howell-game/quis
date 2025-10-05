<template>
  <div class="signup-container">
    <div class="signup-box">
      <h2>Sign Up</h2>

      <form @submit.prevent="handleSignup">
        <label>Name</label>
        <input type="text" v-model="name" required />

        <label>Email</label>
        <input type="email" v-model="email" required />

        <label>Password</label>
        <input type="password" v-model="password" required />

        <button type="submit" class="primary-btn">Sign Up</button>
      </form>

      <button class="facebook-btn" @click="handleFacebookSignup">Continue with Facebook</button>

      <p class="login-link">
        Already have an account?
        <router-link to="/login">Log in</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useRouter } from "vue-router"
import { createUserWithEmailAndPassword, updateProfile, FacebookAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { auth, db } from "@/firebase"

const router = useRouter()
const name = ref("")
const email = ref("")
const password = ref("")

// Email/Password Signup
const handleSignup = async () => {
  try {
    const userCred = await createUserWithEmailAndPassword(auth, email.value, password.value)
    await updateProfile(userCred.user, { displayName: name.value })

    await setDoc(doc(db, "users", userCred.user.uid), {
      uid: userCred.user.uid,
      name: name.value,
      email: email.value,
      photoURL: "",
      correct: 0,
      question: 0,
      timeSpent: 0,
      balance: 0,
      rank: 0,
      questionNo: [],
      score: 0,
      createdAt: new Date()
    })

    router.push("/")
  } catch (err) {
    alert(err.message)
  }
}

// Facebook Signup/Login
const handleFacebookSignup = async () => {
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
        phone: "",
        photoURL: u.photoURL || "",
        correct: 0,
        question: 0,
        timeSpent: 0,
        balance: 0,
        rank: 0,
        questionNo: [],
        score: 0,
        createdAt: new Date()
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
      console.error("Facebook signup failed:", err)
      alert("Facebook sign-in failed. Please try again.")
    }
  }
}

// Handle redirect result after fallback
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
          phone: "",
          photoURL: u.photoURL || "",
          correct: 0,
          question: 0,
          timeSpent: 0,
          balance: 0,
          rank: 0,
          questionNo: [],
          score: 0,
          createdAt: new Date()
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
.signup-container {
  background-color: #f0f2f5;
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

.signup-box {
  background: #fff;
  padding: 30px;
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;
  text-align: center;
}

.signup-box h2 {
  margin-bottom: 20px;
  color: #333;
}

.signup-box label {
  display: block;
  text-align: left;
  margin-top: 15px;
  font-weight: bold;
  color: #444;
}

.signup-box input {
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
  background-color: #007bff;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.primary-btn:hover {
  background-color: #0056b3;
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

.login-link {
  margin-top: 15px;
  font-size: 14px;
}
</style>
