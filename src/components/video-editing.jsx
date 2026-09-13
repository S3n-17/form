import React from 'react'
import InpInputBox from './inp-input-box'
import InpRadioButton from './inp-radio-button'
import '../App.css'
import { Route, Router, useNavigate } from 'react-router-dom'
import Navbar from './navbar'
const VideoEditing = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <br></br>
      <h2 style={{ color: "white", fontWeight: "500" }}>Video Editing</h2>
      <br></br>
      <form onSubmit={(e) => {
        e.preventDefault()
        alert("Form submitted successfully!")
      }}>
        <InpInputBox question="Why do you want to join the Video Editing team?" required />
        <br></br>
        <InpInputBox question="Which video editing software/tools are you familiar with?" required />
        <br></br>
        <InpInputBox question="What type of videos do you enjoy editing?" required />
        <br></br>
        <InpInputBox question="What do you think makes a video engaging?" required />
        <br></br>
        <InpInputBox question="Share the link for any work you have done in video editing" required />
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

export default VideoEditing