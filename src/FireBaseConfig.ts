// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyeVY3IExo2TXRj2HUSo1GhAepxtHnAYs",
  authDomain: "style-loom.firebaseapp.com",
  projectId: "style-loom",
  storageBucket: "style-loom.firebasestorage.app",
  messagingSenderId: "432947928527",
  appId: "1:432947928527:web:aa3f749837b7cc0d1386ba",
  measurementId: "G-K8H8E6BXTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);