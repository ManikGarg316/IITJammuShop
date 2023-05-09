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
  apiKey: "AIzaSyBDqcuHK_7i7EVC0-Skd8sp7K_YQjAamXk",
  authDomain: "iit-jammu-shopping-center.firebaseapp.com",
  projectId: "iit-jammu-shopping-center",
  storageBucket: "iit-jammu-shopping-center.appspot.com",
  messagingSenderId: "428364563062",
  appId: "1:428364563062:web:71a0fd1f18b800f5a01557",
  measurementId: "G-ME09E4QXKM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const provider = new GoogleAuthProvider();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
export {projectStorage, projectFirestore};