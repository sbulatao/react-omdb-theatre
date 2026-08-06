// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPIvjrMSnV2HbA5Zb38_DKYOqrGauFOWU",
    authDomain: "react-omdb-theatre.firebaseapp.com",
    projectId: "react-omdb-theatre",
    storageBucket: "react-omdb-theatre.firebasestorage.app",
    messageingSenderId: "602134373394",
    appId: "1:602134373394:web:468f2f793f82899d88a4cb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(); // Create Read Update Delete stuff -- need data for database