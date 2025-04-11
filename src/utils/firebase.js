// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4N3YnzptGd4i7eQWaatmWcxDhITd1cE4",
  authDomain: "netflix-gpt-d0317.firebaseapp.com",
  projectId: "netflix-gpt-d0317",
  storageBucket: "netflix-gpt-d0317.firebasestorage.app",
  messagingSenderId: "756300607628",
  appId: "1:756300607628:web:e60c7debd7162685278ba9",
  measurementId: "G-PM62FS2L0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();



