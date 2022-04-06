import React from 'react'
import '../../index.css'
import './Header.css'
import {RiExchangeLine} from 'react-icons/ri'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
      <div className="back-button">
      <a href="#contactme" className="btn">Back to Portfolio</a>
      </div>
      <div className="title">
        <h2>Chat Room</h2>
      </div>
      <div className="change-button">
      <a href="#contactme" className="btn"><RiExchangeLine /></a>
      </div>
      </div>
    </header>
  )
}

export default Header