// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyC8lDYzTN-nAKK89CmfAnRvyOo7G5dYJFw",
    authDomain: "ix-library-ea484.firebaseapp.com",
    projectId: "ix-library-ea484",
    storageBucket: "ix-library-ea484.appspot.com",
    messagingSenderId: "765046518314",
    appId: "1:765046518314:web:0a695c32d4474acf01c953"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
