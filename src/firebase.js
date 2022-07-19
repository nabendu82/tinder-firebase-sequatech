import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAmySKClLKVR4zyIbC8m2df6v6hVV1vjc0",
    authDomain: "tinder-firebase-sequatech.firebaseapp.com",
    projectId: "tinder-firebase-sequatech",
    storageBucket: "tinder-firebase-sequatech.appspot.com",
    messagingSenderId: "642280576284",
    appId: "1:642280576284:web:e20648d759998768ac16d9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db