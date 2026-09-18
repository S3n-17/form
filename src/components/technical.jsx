import React, { useState } from 'react'
import InpInputBox from './inp-input-box'
import InpRadioButton from './inp-radio-button'
import '../App.css'
import Navbar from './navbar'
import { useNavigate } from 'react-router-dom'
const Technical = () => {
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
      <h2 style={{ color: "white", fontWeight: "500" }}>Technical Team</h2>
      <br></br>
      <form onSubmit={(e) => {
        e.preventDefault()

        const subselected = document.querySelector(
          'input[name="subdomain"]:checked'
        )

        if (!subselected) {
          alert("Please select a sub domain to proceed")
          return
        }
        const selected = document.querySelector(
          'input[name="techdomain"]:checked'
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
        else if (selected.value === "None") {
          navigate("/final")
        }
        // const domain = document.querySelector(
        //   'input[name="domain"]:checked'
        // )
        // if (!domain) {
        //   alert("Please select a domain to proceed")
        //   return
        // }
      }}>
        <h3 className="q" style={{ padding: "0 0 0 100px", color: "white", fontWeight: "500" }}>Which domain are you most comfortable with?</h3>
        <br></br>
        <InpRadioButton option="Web Development" name="subdomain" checked={formData.subdomain === "Web Development"} onChange={handleChange} />
        <InpRadioButton option="Machine Learning" name="subdomain" checked={formData.subdomain === "Machine Learning"} onChange={handleChange} />
        <InpRadioButton option="Cybersecurity" name="subdomain" checked={formData.subdomain === "Cybersecurity"} onChange={handleChange} />
        <div id="other">
          <InpRadioButton option="Other: " name="subdomain" checked={formData.subdomain === "Other: "} onChange={handleChange} />
          <input
            type="text"
            placeholder=""
            name="otherSubdomain"
            value={formData.otherSubdomain || ""}
            onChange={handleChange} />
        </div>
        <br></br>
        <InpInputBox question="What made you interested in joining the technical team?" name="whyJoinTechnical" value={formData.whyJoinTechnical} onChange={handleChange} required />
        <br></br>
        <InpInputBox question="Which programming languages are you comfortable with?" name="programminglang" value={formData.programminglang} onChange={handleChange} required />
        <br></br>
        <InpInputBox question="Tell us about a project you've worked on" name="projectExperience" value={formData.projectExperience} onChange={handleChange} required />
        <br></br>
        <InpInputBox question="Source Code link" name="sourceCodeLink" value={formData.sourceCodeLink} onChange={handleChange} required />
        <br></br>
        <InpInputBox question="Live demo link" name="liveDemoLink" value={formData.liveDemoLink} onChange={handleChange} required />
        <br></br>
        <InpInputBox question="What are you hoping to learn or gain from being a part of the society?" name="learnings" value={formData.learnings} onChange={handleChange} required />
        <br></br>
        <h3 className="q" style={{ padding: "0 0 0 100px", color: "white", fontWeight: "500" }}>Any other domain you want to apply for</h3>
        <br></br>
        <InpRadioButton option="Content Writing" name="techdomain" checked={formData.techdomain === "Content Writing"} onChange={handleChange} />
        <InpRadioButton option="Graphic Designing" name="techdomain" checked={formData.techdomain === "Graphic Designing"} onChange={handleChange} />
        <InpRadioButton option="Photography" name="techdomain" checked={formData.techdomain === "Photography"} onChange={handleChange} />
        <InpRadioButton option="Video Editing" name="techdomain" checked={formData.techdomain === "Video Editing"} onChange={handleChange} />
        <InpRadioButton option="Public Relations and Management" name="techdomain" checked={formData.techdomain === "Public Relations and Management"} onChange={handleChange} />
        <InpRadioButton option="None" name="techdomain" checked={formData.techdomain === "None"} onChange={handleChange} />
        <br></br>
        <button className="previous-button" onClick={() => navigate(-1)}>
          Previous
        </button>
        <button type="submit" className="next-button">
          Next
        </button>

      </form>
    </div>

  )
}

export default Technical
