import './index.css';
import React, { useState } from 'react';
import Chat from './component/Chat/Chat';
import Header from './component/Header/Header';
import SignIn from './component/SignIn/SignIn';
import ChatContext from './component/ChatContext.tsx';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { initializeApp } from "firebase/app";

function App() {
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
  const [user] = useAuthState(auth);
  const db = getFirestore(app);

  const chatRef = collection(db, "chat");
  // get  message datas.
    const getData = async () => {
    const querySnapshot = await getDocs(chatRef);
    console.log("querySnapshot",querySnapshot);
    const dataArray = querySnapshot.docs.map(doc => doc.data());
    console.log("dataArray", dataArray);
    const dataArrayOrderBy = dataArray.sort((a, b) => (a.createdAt < b.createdAt) ? -1 : 1)
      console.log("dataArrayOrderBy", dataArrayOrderBy);
    return dataArrayOrderBy;
  }

  const [messages, setMessage] = useState([]);

  if(messages.length === 0){
   getData().then((d) => {
    setMessage(d);
  });
 }
  
  return (
    <>
     <ChatContext.Provider>
      <Header />
      {user? <> <Chat data={messages}/> </>: <SignIn />}
    </ChatContext.Provider>
   </>
  );
}

export default App;
