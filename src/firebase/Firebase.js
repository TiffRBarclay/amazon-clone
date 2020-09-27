import { firebaseConfig } from "./FirebaseConfig";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
