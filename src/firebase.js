import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB61Yzc-GusklMokLcvA_8kHylC9HGSAHw",
    authDomain: "faceclone-ae779.firebaseapp.com",
    projectId: "faceclone-ae779",
    storageBucket: "faceclone-ae779.appspot.com",
    messagingSenderId: "866014985880",
    appId: "1:866014985880:web:d60df230482d982ec45aed"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage }
