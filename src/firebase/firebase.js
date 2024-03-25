// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyxZ8dgtBPJxcLxwGfe4t8jTw_66wmVyY",
  authDomain: "hacksparrow-56428.firebaseapp.com",
  projectId: "hacksparrow-56428",
  storageBucket: "hacksparrow-56428.appspot.com",
  messagingSenderId: "1022864141763",
  appId: "1:1022864141763:web:4327818a314efbdfd26176",
  measurementId: "G-7GNQ1YX10S"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);