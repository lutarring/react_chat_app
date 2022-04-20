import React from 'react'
import '../../index.css'
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, signOut } from "firebase/auth";

const Header = () => {
  const auth = getAuth();
  const [user] = useAuthState(auth);

  //logout
  const signOutWithGoogle = () => {
    signOut(auth).then(() => {
    // Sign-out successful.
    window.location.reload(false);
  }).catch((error) => {
    // An error happened.
  });
  }

  return (
    <header>
      <div className="container header_container">
      <div className="back-button">
      <a href="#contactme" className="btn">Back to Portfolio</a>
      </div>
      <div className="title">
        <h2>Chat Room</h2>
      </div>
      {user? <>
      <div className="logOut_div">
         <button className="btn logOut_button" onClick={signOutWithGoogle}>Log out</button>
      </div></>:<></>}
      
      </div>
    </header>
  )
}

export default Header