import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhzV2J9rn7m6Yp5TryH49orM4oSV0xqmA",
  authDomain: "chatgpt-clone-project.firebaseapp.com",
  projectId: "chatgpt-clone-project",
  storageBucket: "chatgpt-clone-project.appspot.com",
  messagingSenderId: "467505243546",
  appId: "1:467505243546:web:70aac51505cab7e1d40623"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };