
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyApPnPmgt-Mnl4ZfwULWb9gCHfs8s0b0iA",
  authDomain: "portfolio-2104.firebaseapp.com",
  projectId: "portfolio-2104",
  storageBucket: "portfolio-2104.appspot.com",
  messagingSenderId: "280746243751",
  appId: "1:280746243751:web:0e0beb432bf79acb5e8d82",
  measurementId: "G-K4TXX067K5"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);