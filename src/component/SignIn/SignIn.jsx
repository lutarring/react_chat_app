import React from 'react'
import '../SignIn/SignIn.css'
import {BsHandIndexThumbFill} from 'react-icons/bs'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Message from '../Message/Message';


 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7-An2miY55MxJ5SNDAkhyPuUBvxyLD-s",
  authDomain: "react-chat-app-ab6e6.firebaseapp.com",
  projectId: "react-chat-app-ab6e6",
  storageBucket: "react-chat-app-ab6e6.appspot.com",
  messagingSenderId: "11234019824",
  appId: "1:11234019824:web:901bc142cdb56410907535",
  measurementId: "G-LLKLFDNC6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();


const SignIn = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }

  const getData = async (e) => {
  const querySnapshot = await getDocs(collection(db, "chat"));
  const dataArray = querySnapshot.docs.map(doc => doc.data());
  console.log('dataArray',dataArray);
  return dataArray;
  }


  return (
    <div className="signIn_container">
      <div className="signIn_body">
        <h2 className="signIn_text">SignIn to chat</h2>
         <BsHandIndexThumbFill className='signIn_icon'/>
         <button className="btn signIn_button" onClick={signInWithGoogle}>Sign in with Google</button>
         {/* <button className="btn signIn_button" onClick={getData}>get data</button> */}

      </div>
    </div>
  )
}

export default SignIn