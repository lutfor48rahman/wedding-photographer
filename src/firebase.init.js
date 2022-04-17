// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB6rRalXmEO2ZJVa_6HUmoT9zOvs1zIrI",
  authDomain: "wedding-photographer-18e78.firebaseapp.com",
  projectId: "wedding-photographer-18e78",
  storageBucket: "wedding-photographer-18e78.appspot.com",
  messagingSenderId: "1075052928379",
  appId: "1:1075052928379:web:1e713dbddcf383dd50f1de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;