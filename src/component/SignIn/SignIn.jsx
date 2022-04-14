import React, { useState } from 'react';
import '../SignIn/SignIn.css'
import {BsHandIndexThumbFill} from 'react-icons/bs'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { query, orderBy, limit, where } from "firebase/firestore";
import ChatContext from '../ChatContext.tsx';

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
  const db = getFirestore(app);


const SignIn = () => {
const { messages, setMessage } = ChatContext.useContainer();

  //login
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).catch((err) => alert(err.message));
  }

  const chatRef = collection(db, "chat");
  const q = query(chatRef);
  const q2 = query(chatRef, where("uid", "==", "Tarring"));
  console.log("q",q);
  console.log("q2",q2);

  // get  message datas.
    const getData = async () => {
    const querySnapshot = await getDocs(chatRef);
    const dataArray = querySnapshot.docs.map(doc => doc.data());
    return dataArray;
  }

  if(messages.length === 0){
   getData().then((d) => {
    setMessage(d);
  });
 }

  return (
    <div className="signIn_container">
      <div className="signIn_body">
        <h2 className="signIn_text">SignIn to chat</h2>
         <BsHandIndexThumbFill className='signIn_icon'/>
         <button className="btn signIn_button" onClick={signInWithGoogle}>Sign in with Google</button>
      </div>
    </div>
  )
}

export default SignIn