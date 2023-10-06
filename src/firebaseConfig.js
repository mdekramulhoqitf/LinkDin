// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGWMw0fVnkZXFo3lwHqas0UaMkamQeR8g",
  authDomain: "linkdin-8c7c9.firebaseapp.com",
  projectId: "linkdin-8c7c9",
  storageBucket: "linkdin-8c7c9.appspot.com",
  messagingSenderId: "955828824389",
  appId: "1:955828824389:web:141889ff7b5d988e38762c",
  measurementId: "G-999PWWG6FW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig