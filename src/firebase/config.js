import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// import {initializeApp} from 'firebase/compat/app'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx621FbJJSB-mj-wxIy50SObvBiifFUTs",
  authDomain: "olx-clone-31b70.firebaseapp.com",
  projectId: "olx-clone-31b70",
  storageBucket: "olx-clone-31b70.appspot.com",
  messagingSenderId: "228760108835",
  appId: "1:228760108835:web:490066d3737bfedadbd696",
  measurementId: "G-6MCRRCMHYB",
};

export default firebase.initializeApp(firebaseConfig);
