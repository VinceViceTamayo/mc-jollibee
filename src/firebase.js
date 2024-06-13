// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg7L0EjyaJzOb3DrUgTvl8lumYITg3v9w",
  authDomain: "mc-jollibee.firebaseapp.com",
  projectId: "mc-jollibee",
  storageBucket: "mc-jollibee.appspot.com",
  messagingSenderId: "177671790824",
  appId: "1:177671790824:web:d1cdb0cc2537e2caf4e95d",
  measurementId: "G-68FTZZFB70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const mcJollibee = collection(db, "products");