import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDh4hxdM9ijhJhztllXn7eeEt7wvmawgIU",
  authDomain: "yume-c41d7.firebaseapp.com",
  projectId: "yume-c41d7",
  storageBucket: "yume-c41d7.appspot.com",
  messagingSenderId: "1062617950956",
  appId: "1:1062617950956:web:205428707ab0183a04d3c9",
  measurementId: "G-F6FF96VTBX"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };