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
      <InpInputBox question="Why do you want to join the PR & Management team?" />
      <br></br>
      <InpInputBox question="How comfortable are you communicating with new people, seniors, faculty, and external guests?" />
        <br></br>
      <InpInputBox question="How do you handle rejection or difficult conversations?" />
      <br></br>
      <InpInputBox question="What qualities make someone good at PR and management?" />
      <br></br>
      <InpInputBox question="Have you organized or managed any events before? If yes, tell us about your experience." />
      <br></br>
      <InpInputBox question="What are you hoping to learn or gain from being a part of the society?" />
      <button className="previous-button" onClick={() => navigate("/")}>Previous</button>
      <button className="submit-button">Submit</button>
    </div>
  )
}

export default PublicRelations