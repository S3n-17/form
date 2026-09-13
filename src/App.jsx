import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/navbar'
import InpInputBox from './components/inp-input-box'
import InpRadioButton from './components/inp-radio-button'
import { Checkbox } from './components/inp-radio-button'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Technical from './components/technical'
import ContentWriting from './components/content-writing'
import GraphicDesigning from './components/graphic-designing'
import Photography from './components/photography'
import VideoEditing from './components/video-editing'
import PublicRelations from './components/pr'
function Form() {
  const navigate = useNavigate()
  const [important, setImportant] = useState("yes")
  const [disabled, setDisabled] = useState(true)
  return (
    <>
      <Navbar />
      <br></br>
      <form onSubmit={(e) => {
        e.preventDefault()

        const branch = document.querySelector(
          'input[name="branch"]:checked'
        )

        if (!branch) {
          alert("Please select a branch to proceed")
          return
        }

        const selected = document.querySelector(
          'input[name="domain"]:checked'
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
      }}>
        <InpInputBox question="Name " important={important} required />
        <br></br>
        <InpInputBox question="Email" important={important} required />
        <br></br>
        <h3 className="q" style={{ padding: "0 0 0 100px", color: "white", fontWeight: "500" }}>Branch</h3>
        <br></br>
        <InpRadioButton option="CSE" name="branch" />
        <InpRadioButton option="CSE-AIML" name="branch" />
        <InpRadioButton option="CSE-DS" name="branch" />
        <InpRadioButton option="CSE-CS" name="branch" />
        <InpRadioButton option="IT" name="branch" />
        <InpRadioButton option="ECE" name="branch" />
        <InpRadioButton option="EE" name="branch" />
        <InpRadioButton option="ME" name="branch" />
        <InpRadioButton option="CE" name="branch" />
        <InpRadioButton option="CHE" name="branch" />
        <InpRadioButton option="BT" name="branch" />
        <InpRadioButton option="AEIE" name="branch" />
        <InpRadioButton option="AGE" name="branch" />
        <InpRadioButton option="FT" name="branch" />
        <br></br>
        <InpInputBox question="Roll Number" required />
        <br></br>
        <InpInputBox question="Tell us about yourself" required />
        <br></br>
        <InpInputBox question="Why do you want to join ISTE?" required />
        <br></br>
        <InpInputBox question="How will you help in the growth of the society?" required />
        <br></br>
        <InpInputBox question="What do you expect to learn from ISTE?" required />
        <br></br>
        <h3 className="q" style={{ padding: "0 0 0 100px", color: "white", fontWeight: "500" }}>Domain you want to apply for</h3>
        <br></br>
        <Checkbox option="Technical" name="domain" />
        <Checkbox option="Content Writing" name="domain" />
        <Checkbox option="Graphic Designing" name="domain" />
        <Checkbox option="Photography" name="domain" />
        <Checkbox option="Video Editing" name="domain" />
        <Checkbox option="Public Relations and Management" name="domain" />
        <br></br>
        <button type="submit" className="next-button">
          Next
        </button>
      </form>
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
