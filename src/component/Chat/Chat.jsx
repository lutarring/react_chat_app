import React, { useState } from 'react';
import '../../index.css';
import '../Chat/Chat.css';
import Message from '../Message/Message';
import moment from 'moment';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const Chat = () => {
  const date = moment().calendar();
  console.log('date', date);

  const [formValue, setFormValue] = useState('');
  // const [messages, setmessage] = useState('123');

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
 
  let dataArray;
  const getData = async () => {
  const querySnapshot = await getDocs(collection(db, "chat"));
  　dataArray = querySnapshot.docs.map(doc => doc.data());
  // setmessage(dataArray);
  console.log('dataArray in ',dataArray);
  // console.log('m in',messages);
  }
  
  getData();
  console.log('dataArray out',dataArray);
  // console.log('m out',messages);


  return (
    <section className="chat">
      <div className="container chat_container">
        <div className="chat_box">
          <div className="chat_title">
          <h2>{date}</h2>
          </div>
          <div className="chatroom_body">
            editting...
            {dataArray}
             {/* { data.map(d => <Message key={d.id} message={d} />) } */}
          </div>
          <div className="chat_bottom_bar">
          </div>
        </div>
        <div className="send">
          <form>
            <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
            <button type="submit" disabled={!formValue}>SEND🕊️</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Chat