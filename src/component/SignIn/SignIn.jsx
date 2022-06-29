import React, { useState } from 'react';
import '../SignIn/SignIn.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //TODO
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