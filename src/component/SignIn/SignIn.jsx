import React, { useState } from 'react';
import '../SignIn/SignIn.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD7-An2miY55MxJ5SNDAkhyPuUBvxyLD-s",
  authDomain: "react-chat-app-ab6e6.firebaseapp.com",
  projectId: "react-chat-app-ab6e6",
  storageBucket: "react-chat-app-ab6e6.appspot.com",
  messagingSenderId: "11234019824",
  appId: "1:11234019824:web:901bc142cdb56410907535",
  measurementId: "G-LLKLFDNC6D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);



const SignIn = () => {
  //login
  function signInWithGoogle(e) {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  
  return (
    <section>
      <div className="box">
        <div className="square_01"></div>
        <div className="square_02"></div>
        <div className="square_03"></div>
        <div className="square_04"></div>
        <div className="square_05"></div>
      </div>
      <div className="sign_container">
        <div className="form">
          <h2>SignIn to chat</h2>
          <form>
            <div className="inputBox">
              <button className="sign_button" onClick={signInWithGoogle}>
                Sign in with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignIn