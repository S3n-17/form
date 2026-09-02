import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/navbar'
import InpInputBox from './components/inp-input-box'
import InpRadioButton from './components/inp-radio-button'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Technical from './components/technical'
import ContentWriting from './components/content-writing'
import GraphicDesigning from './components/graphic-designing'
import Photography from './components/photography'
import VideoEditing from './components/video-editing'
import PublicRelations from './components/pr'
function Form() {
  const navigate = useNavigate()
  return (
    <>
      <Navbar />
      <br></br>
      <InpInputBox question="Name" />
      <br></br>
      <InpInputBox question="Email" />
      <br></br>
      <h3 className="q" style={{ padding: "0 0 0 100px", color: "white", fontWeight: "500" }}>Branch</h3>
      <br></br>
      <InpRadioButton option="CSE" />
      <InpRadioButton option="CSE-AIML" />
      <InpRadioButton option="CSE-DS" />
      <InpRadioButton option="CSE-CS" />
      <InpRadioButton option="IT" />
      <br></br>
      <InpInputBox question="Roll Number" />
      <br></br>
      <InpInputBox question="Tell us about yourself" />
      <br></br>
      <InpInputBox question="Why do you want to join ISTE?" />
      <br></br>
      <InpInputBox question="How will you help in the growth of the society?" />
      <br></br>
      <InpInputBox question="What do you expect to learn from ISTE?" />
      <br></br>
      <h3 className="q" style={{ padding: "0 0 0 100px", color: "white", fontWeight: "500" }}>Domain you want to apply for</h3>
      <br></br>
      <InpRadioButton option="Technical" />
      <InpRadioButton option="Content Writing" />
      <InpRadioButton option="Graphic Designing" />
      <InpRadioButton option="Photography" />
      <InpRadioButton option="Video Editing" />
      <InpRadioButton option="Public Relations and Management" />
      <br></br>
      <button className="next-button"
        onClick={() => {
          const selected = document.querySelector(
            'input[name="options"]:checked'
          )

          if (!selected) {
            alert("Please select a domain to proceed")
            return
          }

          if (selected.value === "Technical") {
            navigate("/technical")
          }
          else if (selected.value === "Content Writing") {
            navigate("/content-writing")
          }
          else if (selected.value === "Graphic Designing") {
            navigate("/graphic-designing")
          }
          else if (selected.value === "Photography") {
            navigate("/photography")
          }
          else if (selected.value === "Video Editing") {
            navigate("/video-editing")
          }
          else if (selected.value === "Public Relations and Management") {
            navigate("/public-relations-and-management")
          }
        }}
        >Next</button >
    </>
  )
}
function App() {
  return (
    <Routes>
      {/* <Route path="*" element={<NotFound />} /> */}
      <Route path="/" element={<Form />} />
      <Route path="/technical" element={<Technical />} />
      <Route path="/content-writing" element={<ContentWriting />} />
      <Route path="/graphic-designing" element={<GraphicDesigning />} />
      <Route path="/photography" element={<Photography />} />
      <Route path="/video-editing" element={<VideoEditing />} />
      <Route path="/public-relations-and-management" element={<PublicRelations />} /> 
    </Routes>
  )

}

export default App
