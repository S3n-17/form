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

  const domain = localStorage.getItem("domainArray") 
    ? JSON.parse(localStorage.getItem("domainArray")) 
    : [];

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
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    // 1. Validate Subdomain selection
    const subselected = document.querySelector('input[name="subdomain"]:checked')
    if (!subselected) {
      alert("Please select a sub domain to proceed")
      return
    }

    // 2. Validate Inline "Other:" text field if selected
    if (formData.subdomain === "Other:") {
      if (!formData.otherSubdomain || !formData.otherSubdomain.trim()) {
        alert("Please fill in the 'Other' subdomain field");
        return;
      }
    }

    // 3. Validate Next Domain selection
    const selected = document.querySelector('input[name="techdomain"]:checked')
    if (!selected) {
      alert("Please select a domain to proceed")
      return
    }

    const selectedDomain = selected.value;

    // 4. Validate Max 2 Domains Selection
    if (selectedDomain !== "None") {
      // Check if this domain wasn't already added previously
      const isNewDomain = !domain.includes(selectedDomain);
      
      if (isNewDomain && domain.length >= 2) {
        alert("You can select a maximum of 2 domains.");
        return;
      }

      if (isNewDomain) {
        const updatedDomains = [...domain, selectedDomain];
        localStorage.setItem("domainArray", JSON.stringify(updatedDomains));
      }
    } else {
      // If "None", ensure current selections are preserved
      if (!domain.includes("None")) {
        localStorage.setItem("domainArray", JSON.stringify([...domain, "None"]));
      }
    }

    // 5. Navigate to the selected path
    const targetRoute = domainRoutes[selectedDomain] || "/final";
    navigate(targetRoute);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div>
      <Navbar />
      <br />
      <div className="section-heading-container">
        <h2 className="section-heading">Technical</h2>
      </div>

      <form onSubmit={handleSubmit}>
        {/* SUBDOMAIN SELECTION */}
        <div className="question-container">
          <h3 className="q" style={{ padding: "0 0 0 0px", color: "white", fontWeight: "500" }}>
            Which domain are you most comfortable with?
          </h3>
          <br />
          <InpRadioButton option="Web Development" name="subdomain" checked={formData.subdomain === "Web Development"} onChange={handleChange} />
          <InpRadioButton option="Machine Learning" name="subdomain" checked={formData.subdomain === "Machine Learning"} onChange={handleChange} />
          <InpRadioButton option="Cybersecurity" name="subdomain" checked={formData.subdomain === "Cybersecurity"} onChange={handleChange} />

          {/* INLINE OTHER OPTION */}
          <div className="radio-option other-option-card">
            <label className="radio-label">
              <input
                type="radio"
                name="subdomain"
                value="Other:"
                checked={formData.subdomain === "Other:"}
                onChange={handleChange}
              />
              <span>Other:</span>
            </label>

            <input
              type="text"
              className="inline-other-input"
              placeholder="Write here"
              name="otherSubdomain"
              value={formData.otherSubdomain || ""}
              onChange={(e) => {
                handleChange(e);
                if (formData.subdomain !== "Other:") {
                  handleChange({ target: { name: "subdomain", value: "Other:" } });
                }
              }}
            />
          </div>
          <br />
        </div>
        <br />

        {/* INPUT BOXES */}
        <InpInputBox question="What made you interested in joining the technical team?" name="whyJoinTechnical" value={formData.whyJoinTechnical} onChange={handleChange} required />
        <br />
        <InpInputBox question="Which programming languages are you comfortable with?" name="programminglang" value={formData.programminglang} onChange={handleChange} required />
        <br />
        <InpInputBox question="Tell us about a project you've worked on" name="projectExperience" value={formData.projectExperience} onChange={handleChange} required />
        <br />
        <InpInputBox question="Source Code link" name="sourceCodeLink" value={formData.sourceCodeLink} onChange={handleChange} required />
        <br />
        <InpInputBox question="Live demo link" name="liveDemoLink" value={formData.liveDemoLink} onChange={handleChange} required />
        <br />
        <InpInputBox question="What are you hoping to learn or gain from being a part of the society?" name="learnings" value={formData.learnings} onChange={handleChange} required />
        <br />

        {/* NEXT DOMAIN SELECTION */}
        <div className="question-container">
          <h3 className="q" style={{ padding: "0 0 0 0px", color: "white", fontWeight: "500" }}>
            Any other domain you want to apply for
          </h3>
          <br />
          <InpRadioButton option="Content Writing" name="techdomain" checked={formData.techdomain === "Content Writing"} onChange={handleChange} />
          <InpRadioButton option="Graphic Designing" name="techdomain" checked={formData.techdomain === "Graphic Designing"} onChange={handleChange} />
          <InpRadioButton option="Photography" name="techdomain" checked={formData.techdomain === "Photography"} onChange={handleChange} />
          <InpRadioButton option="Video Editing" name="techdomain" checked={formData.techdomain === "Video Editing"} onChange={handleChange} />
          <InpRadioButton option="Public Relations and Management" name="techdomain" checked={formData.techdomain === "Public Relations and Management"} onChange={handleChange} />
          <InpRadioButton option="None" name="techdomain" checked={formData.techdomain === "None"} onChange={handleChange} />
          <br />
        </div>
        <br />

        {/* NAVIGATION BUTTONS */}
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

export default Technical