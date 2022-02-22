import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyAiLLuCdCqN-4Fe4sdkjXMSFiWT90rEWk0",
  authDomain: "e-ride-3e3b9.firebaseapp.com",
  projectId: "e-ride-3e3b9",
  storageBucket: "e-ride-3e3b9.appspot.com",
  messagingSenderId: "467900251400",
  appId: "1:467900251400:web:dba4b7ced79cdcf31700bd"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
