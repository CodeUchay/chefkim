// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPzMBTJpFm6qA5IZ4xcLfw7lfAvXdkXXc",
  authDomain: "chefkimfoods.firebaseapp.com",
  projectId: "chefkimfoods",
  storageBucket: "chefkimfoods.appspot.com",
  messagingSenderId: "858774257844",
  appId: "1:858774257844:web:cb0b4708bc14d7b54497e1",
  measurementId: "G-7LXMYLXTTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);