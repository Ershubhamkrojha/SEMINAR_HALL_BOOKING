 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging";
//import { getStorage } from "firebase/storage"
// import {collection,addDoc} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyhwqDKiSVshn32ziuhefOlr2DNkUGkGM",
  authDomain: "seminar-fe764.firebaseapp.com",
  projectId: "seminar-fe764",
  storageBucket: "seminar-fe764.appspot.com",
  messagingSenderId: "422777820180",
  appId: "1:422777820180:web:064bab7ee90f2ede030301",
  measurementId: "G-HHHSVY3GKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export  const Storage =getFirestore(app);
export const db = getFirestore(app);
export const messaging = getMessaging(app);

