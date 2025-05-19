// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl3lpRbz8dAuCc9TBwRmggF-HvPO5XPGg",
  authDomain: "e-commerce-e9e4e.firebaseapp.com",
  projectId: "e-commerce-e9e4e",
  storageBucket: "e-commerce-e9e4e.firebasestorage.app",
  messagingSenderId: "54858298299",
  appId: "1:54858298299:web:fbd73cc17d28bfd0f0ca9e",
  measurementId: "G-ZMWPH8ZZ2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();
