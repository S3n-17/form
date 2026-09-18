import React from 'react'
import './navbar.css'
import isteLogo from '../assets/istelogo.png'
const Navbar = () => {
  return (
    <div id="navbar">
      <img id="image" src={isteLogo} alt="ISTE Logo"></img>
      ISTE Recruitment Form
    </div>
  )
}

export default Navbar
