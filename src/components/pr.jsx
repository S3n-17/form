import React, { useState } from 'react'
import InpInputBox from './inp-input-box'
import InpRadioButton from './inp-radio-button'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import Navbar from './navbar'

const PublicRelations = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState(() => {
    return JSON.parse(localStorage.getItem("formData")) || {}
  })

  const domain = localStorage.getItem("domainArray")
    ? JSON.parse(localStorage.getItem("domainArray"))
    : []

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

  // Path mapping for domain navigation
  const domainRoutes = {
    "Technical": "/technical",
    "Content Writing": "/content-writing",
    "Graphic Designing": "/graphic-designing",
    "Photography": "/photography",
    "Video Editing": "/video-editing",
    "Public Relations and Management": "/public-relations-and-management",
    "None": "/final"
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const selected = document.querySelector(
      'input[name="prdomain"]:checked'
    )

    if (!selected) {
      alert("Please select a domain to proceed")
      return
    }

    const selectedDomain = selected.value

    // Max 2 Domains Validation Rule
    if (selectedDomain !== "None") {
      const isNewDomain = !domain.includes(selectedDomain)

      if (isNewDomain && domain.length >= 2) {
        alert("You can select a maximum of 2 domains.")
        return
      }

      if (isNewDomain) {
        const updatedDomains = [...domain, selectedDomain]
        localStorage.setItem("domainArray", JSON.stringify(updatedDomains))
      }
    } else {
      if (!domain.includes("None")) {
        localStorage.setItem("domainArray", JSON.stringify([...domain, "None"]))
      }
    }

    // Navigate to target route
    const targetRoute = domainRoutes[selectedDomain] || "/final"
    navigate(targetRoute)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div>
      <Navbar />
      <br />
      <div className="section-heading-container">
        <h2 className="section-heading">Public Relations</h2>
      </div>
      <br />

      <form onSubmit={handleSubmit}>
        <InpInputBox 
          question="Why do you want to join the PR & Management team?" 
          name="whyJoinPR" 
          value={formData.whyJoinPR || ""} 
          onChange={handleChange} 
          required 
        />
        <br />
        <InpInputBox 
          question="How comfortable are you communicating with new people, seniors, faculty, and external guests?" 
          name="communicationComfort" 
          value={formData.communicationComfort || ""} 
          onChange={handleChange} 
          required 
        />
        <br />
        <InpInputBox 
          question="How do you handle rejection or difficult conversations?" 
          name="handlingDifficultConversations" 
          value={formData.handlingDifficultConversations || ""} 
          onChange={handleChange} 
          required 
        />
        <br />
        <InpInputBox 
          question="What qualities make someone good at PR and management?" 
          name="goodPRQualities" 
          value={formData.goodPRQualities || ""} 
          onChange={handleChange} 
          required 
        />
        <br />
        <InpInputBox 
          question="Have you organized or managed any events before? If yes, tell us about your experience." 
          name="eventOrganizationExperience" 
          value={formData.eventOrganizationExperience || ""} 
          onChange={handleChange} 
          required 
        />
        <br />
        <InpInputBox 
          question="What are you hoping to learn or gain from being a part of the society?" 
          name="learnings" 
          value={formData.learnings || ""} 
          onChange={handleChange} 
          required 
        />
        <br />

        <div className="question-container">
          <h3 className="q" style={{ padding: "0 0 0 0px", color: "white", fontWeight: "500" }}>
            Any other domain you want to apply for
          </h3>
          <br />
          <InpRadioButton option="Content Writing" name="prdomain" checked={formData.prdomain === "Content Writing"} onChange={handleChange} />
          <InpRadioButton option="Technical" name="prdomain" checked={formData.prdomain === "Technical"} onChange={handleChange} />
          <InpRadioButton option="Graphic Designing" name="prdomain" checked={formData.prdomain === "Graphic Designing"} onChange={handleChange} />
          <InpRadioButton option="Video Editing" name="prdomain" checked={formData.prdomain === "Video Editing"} onChange={handleChange} />
          <InpRadioButton option="Photography" name="prdomain" checked={formData.prdomain === "Photography"} onChange={handleChange} />
          <InpRadioButton option="None" name="prdomain" checked={formData.prdomain === "None"} onChange={handleChange} />
          <br />
        </div>
        <br />

        <button type="button" className="button" onClick={() => navigate(-1)}>
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