import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAClk11KcjpHxrE7aVB_ljlHjGHxqdR_8o",
  authDomain: "netflix-nathancai.firebaseapp.com",
  projectId: "netflix-nathancai",
  storageBucket: "netflix-nathancai.appspot.com",
  messagingSenderId: "139171026065",
  appId: "1:139171026065:web:070ff6d9dab758a361db30"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;