import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAZmFUeOFpT2wZsS4gBVBE5HpTA0unJhQ4",
  authDomain: "linkedin-clone-7c287.firebaseapp.com",
  projectId: "linkedin-clone-7c287",
  storageBucket: "linkedin-clone-7c287.appspot.com",
  messagingSenderId: "844787088824",
  appId: "1:844787088824:web:9cb7db5868c6a0289a234d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
