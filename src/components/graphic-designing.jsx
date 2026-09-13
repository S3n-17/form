import React from 'react'
import InpInputBox from './inp-input-box'
import InpRadioButton from './inp-radio-button'
import '../App.css'
import { Route, Router, useNavigate } from 'react-router-dom'
import Navbar from './navbar'
const GraphicDesigning = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <br></br>
      <h2 style={{ color: "white", fontWeight: "500" }}>Graphic Designing</h2>
      <br></br>
      <form onSubmit={(e) => {
        e.preventDefault()
        alert("Form submitted successfully!")
      }}>
        <InpInputBox question="Why do you want to join the Graphic Designing team?" required />
        <br></br>
        <InpInputBox question="What design tools are you familiar with?" required />
        <br></br>
        <InpInputBox question="What do you think makes a good design?" required />
        <br></br>
        <InpInputBox question="Share the link for any work you have done in graphic design (minimum 3 samples)" required />
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

export default GraphicDesigning
