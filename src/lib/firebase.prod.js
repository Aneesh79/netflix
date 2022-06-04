import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD_QIXZzOLrqcrDtrl3g5zDXICh7MEtxPA",
  authDomain: "netflix-faec8.firebaseapp.com",
  databaseURL: "https://netflix-faec8.firebaseio.com",
  projectId: "netflix-faec8",
  storageBucket: "netflix-faec8.appspot.com",
  messagingSenderId: "913252283744",
  appId: "1:913252283744:web:5c5f7713e673532d4fda05",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
