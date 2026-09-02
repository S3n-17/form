import React from 'react'
import InpInputBox from './inp-input-box'
import InpRadioButton from './inp-radio-button'
import '../App.css'
import Navbar from './navbar'
import { Route, Router, useNavigate } from 'react-router-dom'
const Technical = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <br></br>  
      <h2 style={{ color: "white", fontWeight: "500" }}>Technical Team</h2>
      <br></br>
      <h3 className="q" style={{ padding: "0 0 0 100px", color: "white", fontWeight: "500" }}>Which domain are you most comfortable with?</h3>
      <br></br>
      <InpRadioButton option="Web Development" />
      <InpRadioButton option="Machine Learning" />
      <InpRadioButton option="Cybersecurity" />
      <br></br>
      <InpInputBox question="What made you interested in joining the technical team?" />
      <br></br>
      <InpInputBox question="Which programming languages are you comfortable with?" />
      <br></br>
      <InpInputBox question="Tell us about a project you've worked on" />
      <br></br>
      <InpInputBox question="Source Code link" />
      <br></br>
      <InpInputBox question="Live demo link" />
      <br></br>
      <InpInputBox question="What are you hoping to learn or gain from being a part of the society?" />
      <button className="previous-button" onClick={() => navigate("/")}>
        Previous
      </button>
      <button className="submit-button">Submit</button>
    </div>

  )
}

export default Technical
