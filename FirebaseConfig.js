// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeUd8BkaGu2AJxg1NnJx4SZaHlqllv4Rg",
  authDomain: "log-in-e0e98.firebaseapp.com",
  projectId: "log-in-e0e98",
  storageBucket: "log-in-e0e98.firebasestorage.app",
  messagingSenderId: "78636117814",
  appId: "1:78636117814:web:c3b7fc531964043131cd97"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)