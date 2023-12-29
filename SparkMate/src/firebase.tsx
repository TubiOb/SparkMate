
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBZ0b2k8Xl3ESdxHnpoL0A1JyqZ-uq1FUA",
  authDomain: "sparkmate-755d3.firebaseapp.com",
  projectId: "sparkmate-755d3",
  storageBucket: "sparkmate-755d3.appspot.com",
  messagingSenderId: "537036336389",
  appId: "1:537036336389:web:f47ac2c39f861682865b6c"
};




const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, auth, firestore, storage, getAuth };
