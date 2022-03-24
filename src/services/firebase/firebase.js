import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDN7Ob9yp2m9KqRiUgsG0Rjj_lwYsIkgl0",
  authDomain: "rosemberg24925.firebaseapp.com",
  projectId: "rosemberg24925",
  storageBucket: "rosemberg24925.appspot.com",
  messagingSenderId: "68404245055",
  appId: "1:68404245055:web:29c1ed5fd047bc1afefe8a"
};


const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)