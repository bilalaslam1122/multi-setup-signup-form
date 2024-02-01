import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAer9AfMY25_2L0BEul-TRSTOh3x4bTqi8",
  authDomain: "multi-setup-signup-form-4c169.firebaseapp.com",
  projectId: "multi-setup-signup-form-4c169",
  storageBucket: "multi-setup-signup-form-4c169.appspot.com",
  messagingSenderId: "527252912367",
  appId: "1:527252912367:web:e6a1e63eef0eaf49ed831a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); 

export { db, auth }; 
