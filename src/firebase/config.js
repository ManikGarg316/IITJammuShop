// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// import { GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libranries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwXDIiR3WQiBZgF69jO1wKcPmiRSzZfpw",
  authDomain: "miniproject-website.firebaseapp.com",
  projectId: "miniproject-website",
  storageBucket: "miniproject-website.appspot.com",
  messagingSenderId: "165593492565",
  appId: "1:165593492565:web:d0d059e9262c4c73eb78dc",
  measurementId: "G-ZZ0WH6DLMP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const provider = new GoogleAuthProvider();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
export {projectStorage, projectFirestore};