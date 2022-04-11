import React, { useState } from 'react';
import '../../index.css'
import '../Chat/Chat.css'
import moment from 'moment';

const Chat = () => {
  const date = moment().calendar();
  console.log('date', date);

  const [formValue, setFormValue] = useState('');

  return (
    <section className="chat">
      <div className="container chat_container">
        <div className="chat_box">
          <div className="chat_title">
          <h2>{date}</h2>
          </div>
          <div className="chatroom_body">
            editting...
             {/* {messages && messages.map(msg => <Message key={msg.id} message={msg} />)} */}
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