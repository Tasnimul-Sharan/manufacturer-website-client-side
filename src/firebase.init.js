// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoFgD9b9ZcwaL1TtRhz9A06z4cRngahlY",
  authDomain: "manufacturer-website-c6d47.firebaseapp.com",
  projectId: "manufacturer-website-c6d47",
  storageBucket: "manufacturer-website-c6d47.appspot.com",
  messagingSenderId: "906042800258",
  appId: "1:906042800258:web:b1050bbca6979fb52b5c9b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
