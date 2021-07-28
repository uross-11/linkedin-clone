import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDaMG4dcxr5kPHvF0C5uXFco24CqRB3hQ8",
  authDomain: "linkedin-clone-10e40.firebaseapp.com",
  projectId: "linkedin-clone-10e40",
  storageBucket: "linkedin-clone-10e40.appspot.com",
  messagingSenderId: "252655865350",
  appId: "1:252655865350:web:b36a0888fff53fa0f23d87"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };