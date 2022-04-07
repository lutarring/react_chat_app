import React from 'react'
import '../SignIn/SignIn.css'
import {BsHandIndexThumbFill} from 'react-icons/bs'

const SignIn = () => {
  const signInWithGoogle = () => {
    //TODO
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