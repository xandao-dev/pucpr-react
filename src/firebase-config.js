import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBaPY_eorq7i6I3tnFQ8f6YQHQ5Rfog0II",
    authDomain: "puc-web-8c4da.firebaseapp.com",
    projectId: "puc-web-8c4da",
    storageBucket: "puc-web-8c4da.appspot.com",
    messagingSenderId: "921166310153",
    appId: "1:921166310153:web:837376b5c053969e8b81d8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
