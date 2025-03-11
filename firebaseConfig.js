// firebaseConfig.js
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAPU11y6y0UxJezD0fm0qz_RkEL-P9PVZk",
  authDomain: "acuarium-yacov.firebaseapp.com",
  projectId: "acuarium-yacov",
  storageBucket: "acuarium-yacov.firebasestorage.app",
  messagingSenderId: "516263497960",
  appId: "1:516263497960:web:d61d3617f923b399c1b95d",
  measurementId: "G-P0PQMV7MXF"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase, auth, firestore };