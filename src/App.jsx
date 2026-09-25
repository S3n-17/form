import { useState } from 'react'
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
import Final from './components/final'
import Submitted from './components/submitted'

function Form() {
  const navigate = useNavigate()
  localStorage.setItem("domainArray", JSON.stringify([]))
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
    localStorage.setItem("formData", JSON.stringify(updatedData))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.branch) {
      alert("Please select a branch to proceed")
      return
    }

    const selected = document.querySelector('input[name="maindomain"]:checked')
    if (!selected) {
      alert("Please select a domain to proceed")
      return
    }

    const contactNumber = formData.contactNumber || ''
    const contactNumberPattern = /^[0-9]{10}$/
    if (!contactNumberPattern.test(contactNumber)) {
      alert("Please enter a valid 10-digit contact number")
      return
    }

    const email = formData.email || ''
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address")
      return
    }
    const rollNumber = formData.rollNumber || ''
    const rollNumberPattern = /^[0-9]{2}\/[A-Z]{2,5}\/[0-9]{3}$/
    if (!rollNumberPattern.test(rollNumber)) {
      alert("Please enter a valid roll number in the format XX/XXX/XXX")
      return
    }
    // const routes = {
    //   "Technical": "/technical",
    //   "Content Writing": "/content-writing",
    //   "Graphic Designing": "/graphic-designing",
    //   "Photography": "/photography",
    //   "Video Editing": "/video-editing",
    //   "Public Relations and Management": "/public-relations-and-management"
    // }

    // if (routes[selected.value]) {
    //   navigate(routes[selected.value])
    //   window.scrollTo({ top: 0, behavior: 'smooth' })
    // }
    if (selected.value === "Technical") {
      localStorage.getItem("domainArray") ? localStorage.setItem("domainArray", JSON.stringify([...JSON.parse(localStorage.getItem("domainArray")), "Technical"])) : localStorage.setItem("domainArray", JSON.stringify(["Technical"]));
      navigate("/technical")
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
        }
        else if (selected.value === "Content Writing") {
          localStorage.getItem("domainArray") ? localStorage.setItem("domainArray", JSON.stringify([...JSON.parse(localStorage.getItem("domainArray")), "Content Writing"])) : localStorage.setItem("domainArray", JSON.stringify(["Content Writing"]));
          navigate("/content-writing")
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
        else if (selected.value === "Graphic Designing") {
          localStorage.getItem("domainArray") ? localStorage.setItem("domainArray", JSON.stringify([...JSON.parse(localStorage.getItem("domainArray")), "Graphic Designing"])) : localStorage.setItem("domainArray", JSON.stringify(["Graphic Designing"]));
          navigate("/graphic-designing")
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
        else if (selected.value === "Photography") {
          localStorage.getItem("domainArray") ? localStorage.setItem("domainArray", JSON.stringify([...JSON.parse(localStorage.getItem("domainArray")), "Photography"])) : localStorage.setItem("domainArray", JSON.stringify(["Photography"]));
          navigate("/photography")
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
        else if (selected.value === "Video Editing") {
          localStorage.getItem("domainArray") ? localStorage.setItem("domainArray", JSON.stringify([...JSON.parse(localStorage.getItem("domainArray")), "Video Editing"])) : localStorage.setItem("domainArray", JSON.stringify(["Video Editing"]));
          navigate("/video-editing")
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
        else if (selected.value === "Photography") {
          localStorage.getItem("domainArray") ? localStorage.setItem("domainArray", JSON.stringify([...JSON.parse(localStorage.getItem("domainArray")), "Photography"])) : localStorage.setItem("domainArray", JSON.stringify(["Photography"]));
          navigate("/photography")
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
        else if (selected.value === "Public Relations and Management") {
          localStorage.getItem("domainArray") ? localStorage.setItem("domainArray", JSON.stringify([...JSON.parse(localStorage.getItem("domainArray")), "Public Relations and Management"])) : localStorage.setItem("domainArray", JSON.stringify(["Public Relations and Management"]));
          navigate("/public-relations-and-management")
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
  }

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <InpInputBox question="Name" name="name" value={formData.name || ''} onChange={handleChange} required />
        <InpInputBox question="Email" name="email" value={formData.email || ''} onChange={handleChange} required />
        <InpInputBox question="Contact Number (must have WhatsApp)" name="contactNumber" value={formData.contactNumber || ''} onChange={handleChange} required />

        <div className="question-container">
          <h3 className="q">Branch</h3>
          <br />
          <div className="select-wrapper">
            <select
              name="branch"
              className="custom-dropdown"
              value={formData.branch || ""}
              onChange={handleChange}
              required
            >
              <option value="" disabled hidden>
                Select your branch...
              </option>
              <option value="">Select Branch</option>
              <option value="CSE">CSE</option>
              <option value="CSE-AIML">CSE-AIML</option>
              <option value="CSE-DS">CSE-DS</option>
              <option value="CSE-CS">CSE-CS</option>
              <option value="IT">IT</option>
              <option value="ECE">ECE</option>
              <option value="EE">EE</option>
              <option value="ME">ME</option>
              <option value="CE">CE</option>
              <option value="CHE">CHE</option>
              <option value="BT">BT</option>
              <option value="AEIE">AEIE</option>
              <option value="AGE">AGE</option>
              <option value="FT">FT</option>
            </select>
          </div>
        </div>

        <InpInputBox question="Roll Number (Eg: 25/CSE/123)" name="rollNumber" value={formData.rollNumber || ''} onChange={handleChange} required />
        <InpInputBox question="Tell us about yourself" name="aboutYourself" value={formData.aboutYourself || ''} onChange={handleChange} required />
        <InpInputBox question="Why do you want to join ISTE?" name="reasonForJoining" value={formData.reasonForJoining || ''} onChange={handleChange} required />
        <InpInputBox question="How will you help in the growth of the society?" name="contribution" value={formData.contribution || ''} onChange={handleChange} required />
        <InpInputBox question="What do you expect to learn from ISTE?" name="expectations" value={formData.expectations || ''} onChange={handleChange} required />

        <div className="question-container">
          <h3 className="q">Domain you want to apply for</h3>
          <InpRadioButton option="Technical" name="maindomain" checked={formData.maindomain === "Technical"} onChange={handleChange} />
          <InpRadioButton option="Content Writing" name="maindomain" checked={formData.maindomain === "Content Writing"} onChange={handleChange} />
          <InpRadioButton option="Graphic Designing" name="maindomain" checked={formData.maindomain === "Graphic Designing"} onChange={handleChange} />
          <InpRadioButton option="Photography" name="maindomain" checked={formData.maindomain === "Photography"} onChange={handleChange} />
          <InpRadioButton option="Video Editing" name="maindomain" checked={formData.maindomain === "Video Editing"} onChange={handleChange} />
          <InpRadioButton option="Public Relations and Management" name="maindomain" checked={formData.maindomain === "Public Relations and Management"} onChange={handleChange} />
        </div>

        <button type="submit" className="button">Next</button>
      </form>
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/technical" element={<Technical />} />
      <Route path="/content-writing" element={<ContentWriting />} />
      <Route path="/graphic-designing" element={<GraphicDesigning />} />
      <Route path="/photography" element={<Photography />} />
      <Route path="/video-editing" element={<VideoEditing />} />
      <Route path="/public-relations-and-management" element={<PublicRelations />} />
      <Route path="/final" element={<Final />} />
      <Route path="/submitted" element={<Submitted />} />
    </Routes>
  )
}

export default App