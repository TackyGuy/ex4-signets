import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration (mettez-y les vôtres !)
const firebaseConfig = 
{
  apiKey: "AIzaSyCifly0rAzwthiJ8UMq-LcqcdbpWI3TUQw",
  authDomain: "pvt-h21-bd564.firebaseapp.com",
  projectId: "pvt-h21-bd564",
  storageBucket: "pvt-h21-bd564.appspot.com",
  messagingSenderId: "428836185358",
  appId: "1:428836185358:web:66055485ec8145998fa35f",
  measurementId: "G-DWMZGEFZMX"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const firestore = firebase.firestore();
