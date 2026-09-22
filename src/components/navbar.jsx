import React from 'react'
import './navbar.css'
import isteLogo from '../assets/istelogo.png'
const Navbar = () => {
  return (
    <nav id="navbar">
      <img id="image" src={isteLogo} alt="Logo" />
      <span className="nav-title">ISTE Recruitment Form</span>
    </nav>
  );
}

export default Navbar
