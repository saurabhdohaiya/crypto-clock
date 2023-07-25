import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import firebaseConfig from "./config/firebaseConfig";

//entry point between firease and our app
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };

// Turn on userId and password in firebase
// ALso turn on google auth from the firebase
