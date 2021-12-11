// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5BkN-2pDZoSHiZofzF6MOeIc6ZMWXNrY",
  authDomain: "planner-5e63c.firebaseapp.com",
  projectId: "planner-5e63c",
  storageBucket: "planner-5e63c.appspot.com",
  messagingSenderId: "433858334616",
  appId: "1:433858334616:web:2208cfc00769d3cd6d65ed",
  measurementId: "G-R57N80340G"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
// const analytics = getAnalytics(app);