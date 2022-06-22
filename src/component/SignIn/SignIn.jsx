import React, { useState } from 'react';
import '../SignIn/SignIn.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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
  const auth = getAuth();
  const provider = new GoogleAuthProvider();


const SignIn = () => {
  //login
  const signInWithGoogle = () => {
    console.log("123123")
    signInWithPopup(auth, provider).catch((err) => alert(err.message));
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
    // <div className="signIn_container">
    //   <div className="signIn_body">
    //   <div>
    //     <h2 className="signIn_text">SignIn to chat</h2>
    //   </div>
    //   <div className='icon'>
    //     <BsHandIndexThumbFill className='signIn_icon' />
    //   </div>
    //   <div>
    //     <button className="btn signIn_button" onClick={signInWithGoogle}>Sign in with Google</button>
    //   </div>
    // </div>
    // </div>
  );
}

export default SignIn