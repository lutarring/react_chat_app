import React, { useState } from 'react';
import '../../index.css'
import '../Chat/Chat.css'
import moment from 'moment';


const Chat = () => {
  const date = moment().calendar();
  console.log('date', date);

  const [formValue, setFormValue] = useState('');

  return (
    <div className="chat_container">
      <div className="chat_title">
        <h2>{date}</h2>
      </div>
      <div className="chatroom_body">editing...</div>
      <div className="chat_bottom_bar">
      </div>
    </div>
  )
}

export default Chat