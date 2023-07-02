// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR5jIMDTszH2_qVZjciaTd80iYp7ShxBU",
  authDomain: "proyectocuatro-528db.firebaseapp.com",
  projectId: "proyectocuatro-528db",
  storageBucket: "proyectocuatro-528db.appspot.com",
  messagingSenderId: "165999799675",
  appId: "1:165999799675:web:c2524a7c0744bef074a1de"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore ();
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();