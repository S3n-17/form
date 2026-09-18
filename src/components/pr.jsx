import React, {useState} from 'react'
import InpInputBox from './inp-input-box'
import InpRadioButton from './inp-radio-button'
import '../App.css'
import { Route, Router, useNavigate } from 'react-router-dom'
import Navbar from './navbar'
const PublicRelations = () => {
  const navigate = useNavigate();
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
    <div>
      <Navbar />
      <br></br>
      <h2 style={{ color: "white", fontWeight: "500" }}>Public Relations</h2>
      <br></br>
      <form onSubmit={(e) => {
        const branch = document.querySelector(
          'input[name="branch"]:checked'
        )

        if (!branch) {
          alert("Please select a branch to proceed")
          return
        }

        const selected = document.querySelector(
          'input[name="prdomain"]:checked'
        )

        if (!selected) {
          alert("Please select a domain to proceed")
          return
        }

        if (selected.value === "Technical") {
          navigate("/technical")
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
        else if (selected.value === "Content Writing") {
          navigate("/content-writing")
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
        else if (selected.value === "Graphic Designing") {
          navigate("/graphic-designing")
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
        else if (selected.value === "Photography") {
          navigate("/photography")
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
        else if (selected.value === "Video Editing") {
          navigate("/video-editing")
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
        else if (selected.value === "Public Relations and Management") {
          navigate("/public-relations-and-management")
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
        else if (selected.value === "None") {
          navigate("/final")
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      }}>
        <InpInputBox question="Why do you want to join the PR & Management team?" name="whyJoinPR" value={formData.whyJoinPR} onChange={handleChange} required />
        <br></br>
        <InpInputBox question="How comfortable are you communicating with new people, seniors, faculty, and external guests?" name="communicationComfort" value={formData.communicationComfort} onChange={handleChange} required />
        <br></br>
        <InpInputBox question="How do you handle rejection or difficult conversations?" name="handlingDifficultConversations" value={formData.handlingDifficultConversations} onChange={handleChange} required />
        <br></br>
        <InpInputBox question="What qualities make someone good at PR and management?" name="goodPRQualities" value={formData.goodPRQualities} onChange={handleChange} required />
        <br></br>
        <InpInputBox question="Have you organized or managed any events before? If yes, tell us about your experience." name="eventOrganizationExperience" value={formData.eventOrganizationExperience} onChange={handleChange} required />
        <br></br>
        <InpInputBox question="What are you hoping to learn or gain from being a part of the society?" name="learnings" value={formData.learnings} onChange={handleChange} required />
        <h3 className="q" style={{ padding: "0 0 0 0px", color: "white", fontWeight: "500" }}>Any other domain you want to apply for</h3>
        <br></br>
        <div className="question-container">
        <InpRadioButton option="Content Writing" name="prdomain" checked={formData.prdomain === "Content Writing"} onChange={handleChange} />
        <InpRadioButton option="Technical" name="prdomain" checked={formData.prdomain === "Technical"} onChange={handleChange} />
        <InpRadioButton option="Graphic Designing" name="prdomain" checked={formData.prdomain === "Graphic Designing"} onChange={handleChange} />
        <InpRadioButton option="Video Editing" name="prdomain" checked={formData.prdomain === "Video Editing"} onChange={handleChange} />
        <InpRadioButton option="Photography" name="prdomain" checked={formData.prdomain === "Photography"} onChange={handleChange} />
        <InpRadioButton option="None" name="prdomain" checked={formData.prdomain === "None"} onChange={handleChange} />
        <br></br>
        </div>
        <br></br>
        <button className="button" onClick={() => navigate(-1)}>
          Previous
        </button>
        <button type="submit" className="button">
          Next
        </button>
      </form>
    </div>
  )
}

export default PublicRelations