import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI19_H32e7lXR_UDSoNf_LCcCrkSexIdc",
  authDomain: "clone-f4b60.firebaseapp.com",
  projectId: "clone-f4b60",
  storageBucket: "clone-f4b60.appspot.com",
  messagingSenderId: "98971969402",
  appId: "1:98971969402:web:d0b776ffcc19acf616d8c3",
  measurementId: "G-10S32G9PWQ",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
