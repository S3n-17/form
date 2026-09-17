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
  const [formData, setFormData] = useState(() => {
    return JSON.parse(localStorage.getItem("formData")) || {}
  })
  const handleChange = (e) => {
    const { name, value } = e.target

    const updatedData = {
      ...formData,
      [name]: value
    }

    setFormData(updatedData)

    localStorage.setItem(
      "formData",
      JSON.stringify(updatedData)
    )
  }
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
          'input[name="maindomain"]:checked'
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
        <InpInputBox question="Name " name="name" value={formData.name} onChange={handleChange} required />
        <br></br>
        <InpInputBox question="Email" name="email" value={formData.email} onChange={handleChange} required />
        <br></br>
        <h3 className="q" style={{ padding: "0 0 0 100px", color: "white", fontWeight: "500" }}>Branch</h3>
        <br></br>
        <InpRadioButton option="CSE" name="branch" checked={formData.branch === "CSE"} onChange={handleChange} /> 
        <InpRadioButton option="CSE-AIML" name="branch" checked={formData.branch === "CSE-AIML"} onChange={handleChange} />
        <InpRadioButton option="CSE-DS" name="branch" checked={formData.branch === "CSE-DS"} onChange={handleChange} />
        <InpRadioButton option="CSE-CS" name="branch" checked={formData.branch === "CSE-CS"} onChange={handleChange} />
        <InpRadioButton option="IT" name="branch" checked={formData.branch === "IT"} onChange={handleChange} />
        <InpRadioButton option="ECE" name="branch" checked={formData.branch === "ECE"} onChange={handleChange} />
        <InpRadioButton option="EE" name="branch" checked={formData.branch === "EE"} onChange={handleChange} />
        <InpRadioButton option="ME" name="branch" checked={formData.branch === "ME"} onChange={handleChange} />
        <InpRadioButton option="CE" name="branch" checked={formData.branch === "CE"} onChange={handleChange} />
        <InpRadioButton option="CHE" name="branch" checked={formData.branch === "CHE"} onChange={handleChange} />
        <InpRadioButton option="BT" name="branch" checked={formData.branch === "BT"} onChange={handleChange} />
        <InpRadioButton option="AEIE" name="branch" checked={formData.branch === "AEIE"} onChange={handleChange} />
        <InpRadioButton option="AGE" name="branch" checked={formData.branch === "AGE"} onChange={handleChange} />
        <InpRadioButton option="FT" name="branch" checked={formData.branch === "FT"} onChange={handleChange} />
        <br></br>
        <InpInputBox question="Roll Number" name="rollNumber" value={formData.rollNumber} onChange={handleChange} required />
        <br></br>
        <InpInputBox question="Tell us about yourself" name="aboutYourself" value={formData.aboutYourself} onChange={handleChange} required />
        <br></br>
        <InpInputBox question="Why do you want to join ISTE?" name="reasonForJoining" value={formData.reasonForJoining} onChange={handleChange} required />
        <br></br>
        <InpInputBox question="How will you help in the growth of the society?" name="contribution" value={formData.contribution} onChange={handleChange} required />
        <br></br>
        <InpInputBox question="What do you expect to learn from ISTE?" name="expectations" value={formData.expectations} onChange={handleChange} required />
        <br></br>
        <h3 className="q" style={{ padding: "0 0 0 100px", color: "white", fontWeight: "500" }}>Domain you want to apply for</h3>
        <br></br>
        <InpRadioButton option="Technical" name="maindomain" checked={formData.maindomain === "Technical"} onChange={handleChange} />
        <InpRadioButton option="Content Writing" name="maindomain" checked={formData.maindomain === "Content Writing"} onChange={handleChange} />
        <InpRadioButton option="Graphic Designing" name="maindomain" checked={formData.maindomain === "Graphic Designing"} onChange={handleChange} />
        <InpRadioButton option="Photography" name="maindomain" checked={formData.maindomain === "Photography"} onChange={handleChange} />
        <InpRadioButton option="Video Editing" name="maindomain" checked={formData.maindomain === "Video Editing"} onChange={handleChange} />
        <InpRadioButton option="Public Relations and Management" name="maindomain" checked={formData.maindomain === "Public Relations and Management"} onChange={handleChange} />
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
