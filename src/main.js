import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "./assets/main.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore"
import { auth, db } from "@/firebase"
import { signInWithCustomToken } from "firebase/auth"

// --- FBInstant helper functions ---
function startVueApp(fb = null) {
  const app = createApp(App).use(router)
  app.config.globalProperties.$fb = fb
  app.mount("#app")
}

async function logPlayerInfo(fb) {
  let playerID = null
  let playerName = null
  let playerPhoto = null

  try {
    playerID = fb.player.getID()
    playerName = fb.player.getName() || "Unknown"
    playerPhoto = fb.player.getPhoto() || ""
  } catch (err) {
    console.error("Error fetching FBInstant player data:", err)
  }

  return { playerID, playerName, playerPhoto }
}

async function createOrLoginFirebaseUser({ uid, name, photoURL }) {
  try {
    const userRef = doc(db, "users", uid)
    const userSnap = await getDoc(userRef)

    if (!userSnap.exists()) {
      // New user: create
      await setDoc(userRef, {
        uid,
        name,
        photoURL,
        correct: 0,
        question: 0,
        timeSpent: 0,
        balance: 0,
        rank: 0,
        questionNo: [],
        score: 0,
        createdAt: serverTimestamp()
      })
      console.log("New Firebase user created ✅")
    } else {
      console.log("Returning user — no overwrite ✅")
    }
  } catch (err) {
    console.error("Error creating/logging in Firebase user:", err)
  }
}

// --- Context / game initialization ---
async function logContextInfo(fb) {
  try {
    const contextID = fb.context.getID()
    const contextType = fb.context.getType()
    console.log("Context ID:", contextID)
    console.log("Context Type:", contextType)

    if (contextID && contextType !== "SOLO") {
      try {
        const isPublic = await fb.context.isPublicAsync(contextID)
        console.log("Context is public:", isPublic)
      } catch (err) {
        console.warn("Cannot check context public status:", err)
      }

      try {
        const players = await fb.context.getPlayersAsync()
        console.log("Context players:", players)
      } catch (err) {
        console.warn("Error getting context players:", err)
      }
    } else {
      console.log("No valid multiplayer context — SOLO mode")
    }
  } catch (err) {
    console.error("Error fetching context info:", err)
  }
}

async function chooseContextIfSolo(fb) {
  const contextType = fb.context.getType()
  if (contextType === "SOLO") {
    console.log("Player is in SOLO context. Prompting to choose a context...")
    try {
      await fb.context.chooseAsync()
      console.log("New context chosen ✅")
      await logContextInfo(fb)
    } catch (err) {
      console.warn("Context chooseAsync canceled or failed:", err)
    }
  } else {
    console.log("Player is already in a multiplayer context.")
  }
}

// --- Main initialization ---
async function init() {
  const fb = typeof window !== "undefined" ? window.FBInstant : null

  if (fb && typeof fb.initializeAsync === "function") {
    console.log("Detected FBInstant environment ✅")

    try {
      await fb.initializeAsync()
      console.log("FB Instant Game initialized 🎮")

      // Get FB player info
      const { playerID, playerName, playerPhoto } = await logPlayerInfo(fb)

      // --- Firebase auto signup/login ---
      // Use playerID as uid
      if (playerID) {
        await createOrLoginFirebaseUser({
          uid: playerID,
          name: playerName,
          photoURL: playerPhoto
        })
      }

      // Start the game
      await fb.startGameAsync()
      console.log("FB Instant Game started ✅")

      // Context check
      await logContextInfo(fb)
      await chooseContextIfSolo(fb)

      // Boot Vue
      startVueApp(fb)
    } catch (err) {
      console.error("FBInstant error:", err)
      startVueApp(null)
    }
  } else {
    console.warn("FBInstant not available — running in web mode 🌐")
    startVueApp(null)
  }
}

init()
