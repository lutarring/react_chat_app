import React, { useState, useRef, useEffect } from 'react';
import '../../index.css';
import '../Chat/Chat.css';
import Message from '../Message/Message';
import moment from 'moment';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs, doc, setDoc } from 'firebase/firestore/lite';
import ChatContext from '../ChatContext.tsx';



const Chat = () => {
const { messages, setMessage } = ChatContext.useContainer();

  const date = moment().calendar();
  const [formValue, setFormValue] = useState('');

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

  // get  message datas.
  const chatRef = collection(db, "chat");
  const getData = async () => {
  const querySnapshot = await getDocs(chatRef);
  const dataArray = querySnapshot.docs.map(doc => doc.data());
  const dataArrayOrderBy = dataArray.sort((a, b) => (a.createdAt < b.createdAt) ? -1 : 1)

  return dataArrayOrderBy;
  }

  if(messages.length === 0){
   getData().then((d) => {
    setMessage(d);
  });
}

  const { uid, photoURL } = auth.currentUser;
  const createdAt = moment().format();
  const docData = {
    uid: uid,
    text: formValue,
    photoURL: photoURL,
    createdAt: createdAt,
};

const messageDocID = uid + createdAt;
const setDocToFirestore = async (e) => {
  e.preventDefault();
  await setDoc(doc(db, "chat", messageDocID), docData);
  setFormValue('');
  await getData().then((d) => {
    setMessage(d);
    console.log("settingNew!!!");
  });
}

const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]);

  return (
    <section className="chat">
      <div className="container chat_container">
        <div className="chat_box">
          <div className="chat_title">
          <h2>{date}</h2>
          </div>
          <div className="chatroom_body">
             {messages? messages && messages.map((m) => <Message key={m.createdAt} message={m}/>) : <></>}
              <div ref={messagesEndRef} />
          </div>
          <div className="chat_bottom_bar">
          </div>
        </div>
        <div className="send">
          <form onSubmit={setDocToFirestore}>
            <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
            <button type="submit" disabled={!formValue}>SEND🕊️</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Chat