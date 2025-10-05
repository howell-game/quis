import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, FacebookAuthProvider } from 'firebase/auth'


const firebaseConfig = {
 apiKey: "AIzaSyB9_6M0plpGAegqzVp1uOouqAVUbry9sqM",
 authDomain: "howwell-game.firebaseapp.com",
 projectId: "howwell-game",
 storageBucket: "howwell-game.firebasestorage.app",
 messagingSenderId: "26663870324",
 appId: "1:26663870324:web:d2655b10ba2d62f9701621"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)
const facebookProvider = new FacebookAuthProvider()

export { auth, db, facebookProvider }