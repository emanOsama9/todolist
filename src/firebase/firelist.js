// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_g1-z2iu5cPbEFsVhJWeItU4kBpw6eKg",
  authDomain: "lists-af431.firebaseapp.com",
  projectId: "lists-af431",
  storageBucket: "lists-af431.firebasestorage.app",
  messagingSenderId: "103454925830",
  appId: "1:103454925830:web:e6779bd5e7eb76b32f4f87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
