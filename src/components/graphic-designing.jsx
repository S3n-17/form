import React, {useState} from 'react'
import InpInputBox from './inp-input-box'
import InpRadioButton from './inp-radio-button'
import '../App.css'
import { Route, Router, useNavigate } from 'react-router-dom'
import Navbar from './navbar'
const GraphicDesigning = () => {
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
      <h2 style={{ color: "white", fontWeight: "500" }}>Graphic Designing</h2>
      <br></br>
      <form onSubmit={(e) => {
        e.preventDefault()

        const selected = document.querySelector(
          'input[name="gddomain"]:checked'
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
      }}>
        <InpInputBox question="Why do you want to join the Graphic Designing team?" name="whyJoinGraphicDesigning" value={formData.whyJoinGraphicDesigning} onChange={handleChange} required />
        <br></br>
        <InpInputBox question="What design tools are you familiar with?" name="designTools" value={formData.designTools} onChange={handleChange} required />
        <br></br>
        <InpInputBox question="What do you think makes a good design?" name="goodDesign" value={formData.goodDesign} onChange={handleChange} required />
        <br></br>
        <InpInputBox question="Share the link for any work you have done in graphic design (minimum 3 samples)" name="graphicDesignWork" value={formData.graphicDesignWork} onChange={handleChange} required />
        <br></br>
        <InpInputBox question="What are you hoping to learn or gain from being a part of the society?" name="learnings" value={formData.learnings} onChange={handleChange} required />
        <h3 className="q" style={{ padding: "0 0 0 100px", color: "white", fontWeight: "500" }}>Any other domain you want to apply for</h3>
        <br></br>
        <InpRadioButton option="Content Writing" name="gddomain" checked={formData.gddomain === "Content Writing"} onChange={handleChange} />
        <InpRadioButton option="Technical" name="gddomain" checked={formData.gddomain === "Technical"} onChange={handleChange} />
        <InpRadioButton option="Photography" name="gddomain" checked={formData.gddomain === "Photography"} onChange={handleChange} />
        <InpRadioButton option="Video Editing" name="gddomain" checked={formData.gddomain === "Video Editing"} onChange={handleChange} />
        <InpRadioButton option="Public Relations and Management" name="gddomain" checked={formData.gddomain === "Public Relations and Management"} onChange={handleChange} />
        <InpRadioButton option="None" name="gddomain" checked={formData.gddomain === "None"} onChange={handleChange} />
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

export default GraphicDesigning
