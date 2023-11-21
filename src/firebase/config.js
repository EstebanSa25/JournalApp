// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmCATfpSAiNKzZzzVOk-rtls12m6XeL9U",
    authDomain: "react-cursos-ce5a5.firebaseapp.com",
    projectId: "react-cursos-ce5a5",
    storageBucket: "react-cursos-ce5a5.appspot.com",
    messagingSenderId: "154834198734",
    appId: "1:154834198734:web:c4bd8cc8276fcbe0edf09f"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);