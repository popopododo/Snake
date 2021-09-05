// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj2Smmg0EJhe-VToQ8ZrGZC_d5kdmTzA8",
  authDomain: "snake-7e062.firebaseapp.com",
  projectId: "snake-7e062",
  storageBucket: "snake-7e062.appspot.com",
  messagingSenderId: "131765402480",
  appId: "1:131765402480:web:a9da8cd2889116dd526db5"
};

export default firebase.initializeApp(firebaseConfig);