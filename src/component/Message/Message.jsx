import React from 'react'
import { getAuth } from "firebase/auth";
import '../Message/Message.css';


const Message = (props) => {
  const auth = getAuth();
    
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
  <>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>
  )
}

export default Message