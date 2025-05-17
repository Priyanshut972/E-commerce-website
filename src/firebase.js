// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoU5TSLVNdYKyBQhZ9989anDX2Ym1AAMA",
  authDomain: "cptpriyanshu.firebaseapp.com",
  projectId: "cptpriyanshu",
  storageBucket: "cptpriyanshu.firebasestorage.app",
  messagingSenderId: "540180103309",
  appId: "1:540180103309:web:6506945eea651020fc22c4",
  measurementId: "G-RFWV2G2WJN"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();
