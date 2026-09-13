import React from 'react'
import InpInputBox from './inp-input-box'
import InpRadioButton from './inp-radio-button'
import '../App.css'
import { Route, Router, useNavigate } from 'react-router-dom'
import Navbar from './navbar'
const PublicRelations = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <br></br>
      <h2 style={{ color: "white", fontWeight: "500" }}>Public Relations</h2>
      <br></br>
      <form onSubmit={(e) => {
        e.preventDefault()
        alert("Form submitted successfully!")
      }}>
        <InpInputBox question="Why do you want to join the PR & Management team?" required />
        <br></br>
        <InpInputBox question="How comfortable are you communicating with new people, seniors, faculty, and external guests?" required />
        <br></br>
        <InpInputBox question="How do you handle rejection or difficult conversations?" required />
        <br></br>
        <InpInputBox question="What qualities make someone good at PR and management?" required />
        <br></br>
        <InpInputBox question="Have you organized or managed any events before? If yes, tell us about your experience." required />
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

export default PublicRelations