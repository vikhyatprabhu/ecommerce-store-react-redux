import firebase from 'firebase/app';
import 'firebase/firebase-firestore'
import 'firebase/firebase-auth'

var firebaseConfig = {
  apiKey: "AIzaSyBKlohi0kI5SatRym3S5JYNKi6mL_XeNek",
  authDomain: "ecommerce-db-31ec0.firebaseapp.com",
  projectId: "ecommerce-db-31ec0",
  storageBucket: "ecommerce-db-31ec0.appspot.com",
  messagingSenderId: "5005047183",
  appId: "1:5005047183:web:90ccf81ee87f8266f787fa",
  measurementId: "G-3XV5WWT30Z"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;