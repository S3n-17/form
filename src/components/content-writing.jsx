import React from 'react'
import InpInputBox from './inp-input-box'
import InpRadioButton from './inp-radio-button'
import '../App.css'
import { Route, Router, useNavigate } from 'react-router-dom'
import Navbar from './navbar'
const ContentWriting = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <br></br>
      <form onSubmit={(e) => {
        e.preventDefault()
        alert("Form submitted successfully!")
      }}>
        <h2 style={{ color: "white", fontWeight: "500" }}>Content Writing</h2>
        <br></br>
        <InpInputBox question="Why do you want to join the Content Writing team?" required />
        <br></br>
        <InpInputBox question="What type of content do you enjoy writing the most?" required />
        <br></br>
        <InpInputBox question="What do you think makes a piece of content engaging?" required />
        <br></br>
        <InpInputBox question="Share a piece of writing you have written" required />
        <br></br>
        <InpInputBox question="What are you hoping to learn or gain from being a part of the society?" required />
        <button className="previous-button" onClick={() => navigate("/")}>Previous</button>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>

  )
}

export default ContentWriting