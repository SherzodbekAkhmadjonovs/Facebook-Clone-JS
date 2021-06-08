// npm install -g firebase-tools
// firebase login
// firebase init
// firebase deploy
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCRQWyB1sRTwHigx07tiRoGG23Sbr5VdFE",
    authDomain: "facebook-clone-594fa.firebaseapp.com",
    projectId: "facebook-clone-594fa",
    storageBucket: "facebook-clone-594fa.appspot.com",
    messagingSenderId: "894235427086",
    appId: "1:894235427086:web:6aa444d34e225a01e6d75f",
    measurementId: "G-NQXGB01VJV"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
export {auth, provider}
export default db