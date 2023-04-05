// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX0AZqX3CHUo2I8wwvx2Ae8gqmG0QSOgs",
  authDomain: "netflix-7db9d.firebaseapp.com",
  projectId: "netflix-7db9d",
  storageBucket: "netflix-7db9d.appspot.com",
  messagingSenderId: "51935609033",
  appId: "1:51935609033:web:11fc2ba82215ce72ae0d18",
  measurementId: "G-V79G3N18WZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)