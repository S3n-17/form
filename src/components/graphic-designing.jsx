import React, { useState } from 'react'
import InpInputBox from './inp-input-box'
import InpRadioButton from './inp-radio-button'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import Navbar from './navbar'

const GraphicDesigning = () => {
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
      'input[name="gddomain"]:checked'
    )

    if (!selected) {
      alert("Please select a domain to proceed")
      return
    }

    const selectedDomain = selected.value

    // Max 2 Domains Validation
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
        <h2 className="section-heading">Graphic Designing</h2>
      </div>
      <br />

      <form onSubmit={handleSubmit}>
        <InpInputBox 
          question="Why do you want to join the Graphic Designing team?" 
          name="whyJoinGraphicDesigning" 
          value={formData.whyJoinGraphicDesigning || ""} 
          onChange={handleChange} 
          required 
        />
        <br />
        <InpInputBox 
          question="What design tools are you familiar with?" 
          name="designTools" 
          value={formData.designTools || ""} 
          onChange={handleChange} 
          required 
        />
        <br />
        <InpInputBox 
          question="What do you think makes a good design?" 
          name="goodDesign" 
          value={formData.goodDesign || ""} 
          onChange={handleChange} 
          required 
        />
        <br />
        <InpInputBox 
          question="Share the link for any work you have done in graphic design (minimum 3 samples)" 
          name="graphicDesignWork" 
          value={formData.graphicDesignWork || ""} 
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
          <InpRadioButton option="Content Writing" name="gddomain" checked={formData.gddomain === "Content Writing"} onChange={handleChange} />
          <InpRadioButton option="Technical" name="gddomain" checked={formData.gddomain === "Technical"} onChange={handleChange} />
          <InpRadioButton option="Photography" name="gddomain" checked={formData.gddomain === "Photography"} onChange={handleChange} />
          <InpRadioButton option="Video Editing" name="gddomain" checked={formData.gddomain === "Video Editing"} onChange={handleChange} />
          <InpRadioButton option="Public Relations and Management" name="gddomain" checked={formData.gddomain === "Public Relations and Management"} onChange={handleChange} />
          <InpRadioButton option="None" name="gddomain" checked={formData.gddomain === "None"} onChange={handleChange} />
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

export default GraphicDesigning
