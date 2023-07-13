import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDhzkBd2l4mobWtMSM3EW5Vt4T5VCVQjU0",
  authDomain: "restaurant-c008b.firebaseapp.com",
  projectId: "restaurant-c008b",
  storageBucket: "restaurant-c008b.appspot.com",
  messagingSenderId: "867881364875",
  appId: "1:867881364875:web:d35978f9398aa5bbd5538e"
};

const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore ();
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

