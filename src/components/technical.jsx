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
      <form onSubmit={(e) => {
        e.preventDefault()
        alert("Form submitted successfully!")
        const domain = document.querySelector(
          'input[name="domain"]:checked'
        )
        if (!domain) {
          alert("Please select a domain to proceed")
          return
        }
      }}>
        <h3 className="q" style={{ padding: "0 0 0 100px", color: "white", fontWeight: "500" }}>Which domain are you most comfortable with?</h3>
        <br></br>
        <InpRadioButton option="Web Development" name="domain" />
        <InpRadioButton option="Machine Learning" name="domain" />
        <InpRadioButton option="Cybersecurity" name="domain" />
        <br></br>
        <InpInputBox question="What made you interested in joining the technical team?" required />
        <br></br>
        <InpInputBox question="Which programming languages are you comfortable with?" required />
        <br></br>
        <InpInputBox question="Tell us about a project you've worked on" required />
        <br></br>
        <InpInputBox question="Source Code link" required />
        <br></br>
        <InpInputBox question="Live demo link" required />
        <br></br>
        <InpInputBox question="What are you hoping to learn or gain from being a part of the society?" required />
        <button className="previous-button" onClick={() => navigate("/")}>
          Previous
        </button>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>

  )
}

export default Technical
