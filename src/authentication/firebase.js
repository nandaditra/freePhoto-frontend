import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyC7D56JTsbvH4EMeYBt3fvSTKu9DOqFro8",
    authDomain: "free-photo-auth.firebaseapp.com",
    projectId: "free-photo-auth",
    storageBucket: "free-photo-auth.appspot.com",
    messagingSenderId: "218620992486",
    appId: "1:218620992486:web:d890b4c2d6401d0ecfd427",
    measurementId: "G-GYYQGXFBVB"
  };

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export default app