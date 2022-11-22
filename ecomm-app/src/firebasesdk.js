// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmImmwzkK5c20WB5WuCHDH5fTmNuOWoh4",
  authDomain: "ecomm-app-70cba.firebaseapp.com",
  projectId: "ecomm-app-70cba",
  storageBucket: "ecomm-app-70cba.appspot.com",
  messagingSenderId: "728397622259",
  appId: "1:728397622259:web:d122aa2cacd01850700086",
  measurementId: "G-DSQR7MC0PV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);