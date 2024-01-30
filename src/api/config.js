
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAYLZ6zy4ikNBpUJmCmQ7T40UKBmcOHkm8",
//   authDomain: "opticaflex-c22c3.firebaseapp.com",
//   projectId: "opticaflex-c22c3",
//   storageBucket: "opticaflex-c22c3.appspot.com",
//   messagingSenderId: "225826148790",
//   appId: "1:225826148790:web:9ea274d1b4e4afe3db7117",
//   measurementId: "G-8MXE7FKRMV"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// //Firestore
// export const db = getFirestore(app);

// config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYLZ6zy4ikNBpUJmCmQ7T40UKBmcOHkm8",
  authDomain: "opticaflex-c22c3.firebaseapp.com",
  projectId: "opticaflex-c22c3",
  storageBucket: "opticaflex-c22c3.appspot.com",
  messagingSenderId: "225826148790",
  appId: "1:225826148790:web:9ea274d1b4e4afe3db7117",
  measurementId: "G-8MXE7FKRMV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase initialized successfully!"); // Agrega esto para verificar

// Firestore
export const db = getFirestore(app);