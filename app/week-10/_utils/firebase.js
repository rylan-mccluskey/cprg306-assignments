// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDacmDYV1OQhkwyJZTyub3YJORfT5Qdjv8",
  authDomain: "cprg306-assignments-c25c3.firebaseapp.com",
  projectId: "cprg306-assignments-c25c3",
  storageBucket: "cprg306-assignments-c25c3.appspot.com",
  messagingSenderId: "650974167233",
  appId: "1:650974167233:web:bf879ae03225117e41d440"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);