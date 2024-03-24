// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjh-PXP6UogQjjyz2LGVPHyGUDHqQChPM",
  authDomain: "primer-login-7d3c7.firebaseapp.com",
  projectId: "primer-login-7d3c7",
  storageBucket: "primer-login-7d3c7.appspot.com",
  messagingSenderId: "707693460266",
  appId: "1:707693460266:web:1506370860a3f338e4fc53"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;