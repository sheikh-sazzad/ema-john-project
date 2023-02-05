// Import the functions you need from the SDKs you need
import { initializeAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUcKId5X8VJWnh0di11RJSLz1bCrnQhnE",
  authDomain: "ema-john-project-3ccae.firebaseapp.com",
  projectId: "ema-john-project-3ccae",
  storageBucket: "ema-john-project-3ccae.appspot.com",
  messagingSenderId: "370716103647",
  appId: "1:370716103647:web:8ec0c8752c21df47d62a6a",
};

// Initialize Firebase
const app = initializeAuth(firebaseConfig);

export default app;
