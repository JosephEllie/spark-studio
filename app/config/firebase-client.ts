import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from "firebase/storage"


// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCRRYUXoDBSS5zIL02jefpnVtpCtBnm0oI",
  authDomain: "book-shop-5ac6c.firebaseapp.com",
  projectId: "book-shop-5ac6c",
  storageBucket: "book-shop-5ac6c.appspot.com",
  messagingSenderId: "723064654849",
  appId: "1:723064654849:web:4a173f5971bfb854264400"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
