import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAa9imcseC7I3dgCze0HuRWiNhIMQSNwHw",
    authDomain: "goodhands-b08b0.firebaseapp.com",
    projectId: "goodhands-b08b0",
    storageBucket: "goodhands-b08b0.appspot.com",
    messagingSenderId: "242303815799",
    appId: "1:242303815799:web:be04b9952fb05a4814f672",
    measurementId: "G-KJZDLD1HD8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

