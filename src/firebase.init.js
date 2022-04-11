
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCXbfC0RYHxqfsIc9bRyN7n4RH8hGZLgmY",
    authDomain: "react-emajohn-firebase-route.firebaseapp.com",
    projectId: "react-emajohn-firebase-route",
    storageBucket: "react-emajohn-firebase-route.appspot.com",
    messagingSenderId: "731189845948",
    appId: "1:731189845948:web:85f193f709fc9a2eccd5b9"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;