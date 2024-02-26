import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_API_KEY,
  // authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE_APP_ID,
  // databaseURL: import.meta.env.VITE_DATABASE_URL,
  apiKey: "AIzaSyAIoW1D1Jkp2Zfrjep8NhfJlPxhvIHlHUI",
  authDomain: "restaurant-fa988.firebaseapp.com",
  databaseURL: "https://restaurant-fa988-default-rtdb.firebaseio.com",
  projectId: "restaurant-fa988",
  storageBucket: "restaurant-fa988.appspot.com",
  messagingSenderId: "101698068507",
  appId: "1:101698068507:web:af7985c59c753899d218be",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage();
