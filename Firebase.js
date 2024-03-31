// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import{getAuth} from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm9BTtqb6oPwhxWGhb9Yu72sUjwmv_xt8",
  authDomain: "practice-491d0.firebaseapp.com",
  projectId: "practice-491d0",
  storageBucket: "practice-491d0.appspot.com",
  messagingSenderId: "52563241186",
  appId: "1:52563241186:web:5b728a7827314c76a2d6bb",
  measurementId: "G-KF6PL72B9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth=getAuth(app);


export  {app,auth};