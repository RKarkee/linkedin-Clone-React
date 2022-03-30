// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDXX45qFXEgPbPzQrKaqQy1f5AHGgMdYsg",
  authDomain: "linkedin-clone-2ed6f.firebaseapp.com",
  projectId: "linkedin-clone-2ed6f",
  storageBucket: "linkedin-clone-2ed6f.appspot.com",
  messagingSenderId: "371549144408",
  appId: "1:371549144408:web:471ec372eca66d0a3a512d",
  measurementId: "G-3B07SQNSSL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export{ db, auth };