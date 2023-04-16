// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0y6D4xNUd4BVeSiCAIhdaRVYBu3gjnjc",
  authDomain: "social-media-eda8b.firebaseapp.com",
  projectId: "social-media-eda8b",
  storageBucket: "social-media-eda8b.appspot.com",
  messagingSenderId: "382814429685",
  appId: "1:382814429685:web:3d1c13076a7fc941d340bc",
  measurementId: "G-39WN3C10T0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);