import React from 'react'
import InpInputBox from './inp-input-box'
import InpRadioButton from './inp-radio-button'
import '../App.css'
import Navbar from './navbar'
const ContentWriting = () => {
  return (
    <div>
      <Navbar />
      <br></br>  
      <h2 style={{ color: "white", fontWeight: "500" }}>Content Writing</h2>
      {/* <h3 className="q" style={{ padding: "0 0 0 100px", color: "white", fontWeight: "500" }}>Which domain are you most comfortable with?</h3>
      <br></br>
      <InpRadioButton option="Web Development" />
      <InpRadioButton option="Machine Learning" />
      <InpRadioButton option="Cybersecurity" /> */}
      <br></br>
      <InpInputBox question="Why do you want to join the Content Writing team?" />
      <br></br>
      <InpInputBox question="What type of content do you enjoy writing the most?" />
      <br></br>
      <InpInputBox question="What do you think makes a piece of content engaging?" />
      <br></br>
      <InpInputBox question="Share a piece of writing you have written" />
      <br></br>
      {/* <InpInputBox question="Source Code link" />
      <br></br>
      <InpInputBox question="Live demo link" />
      <br></br> */}
      <InpInputBox question="What are you hoping to learn or gain from being a part of the society?" />
      <button className="next-button">Next</button>
    </div>

  )
}

export default ContentWriting