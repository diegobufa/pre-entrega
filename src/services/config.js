
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZQJYPbWckJYyJsZ6YerV5Gk3Jtibpwzo",
  authDomain: "regionales-firmat.firebaseapp.com",
  projectId: "regionales-firmat",
  storageBucket: "regionales-firmat.appspot.com",
  messagingSenderId: "719007454054",
  appId: "1:719007454054:web:71710c7c27a5db11e9eea7"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);