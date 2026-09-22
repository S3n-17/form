import React, {useState} from 'react'
import InpInputBox from './inp-input-box'
import InpRadioButton from './inp-radio-button'
import '../App.css'
import { Route, Router, useNavigate } from 'react-router-dom'
import Navbar from './navbar'
const Photography = () => {
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
      <div className="section-heading-container">
        <h2 className="section-heading">Photography</h2>
      </div>
      <br></br>
      <form onSubmit={(e) => {
        e.preventDefault()

        const selected = document.querySelector(
          'input[name="photographydomain"]:checked'
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
        <InpInputBox question="Why do you want to join the Photography team?" name="whyJoinPhotography" value={formData.whyJoinPhotography} onChange={handleChange} required />
        <br></br>
        <InpInputBox question="What camera equipment are you familiar with?" name="cameraEquipment" value={formData.cameraEquipment} onChange={handleChange} required />
        <br></br>
        <InpInputBox question="What type of photography do you enjoy?" name="photographyType" value={formData.photographyType} onChange={handleChange} required />
        <br></br>
        <InpInputBox question="What do you think makes a good photograph?" name="goodPhotograph" value={formData.goodPhotograph} onChange={handleChange} required />
        <br></br>
        <InpInputBox question="Do you have experience with photo editing? If yes, which tools?" name="photoEditingExperience" value={formData.photoEditingExperience} onChange={handleChange} required />
        <br></br>
        <InpInputBox question="Share the link for any work you have done in photography (minimum 5 samples)" name="photographyWork" value={formData.photographyWork} onChange={handleChange} required />
        <br></br>
        <InpInputBox question="What are you hoping to learn or gain from being a part of the society?" name="learnings" value={formData.learnings} onChange={handleChange} required />
        <div className="question-container">
        <h3 className="q" style={{ padding: "0 0 0 0px", color: "white", fontWeight: "500" }}>Any other domain you want to apply for</h3>
        <br></br>
        <InpRadioButton option="Content Writing" name="photographydomain" checked={formData.photographydomain === "Content Writing"} onChange={handleChange} />
        <InpRadioButton option="Technical" name="photographydomain" checked={formData.photographydomain === "Technical"} onChange={handleChange} />
        <InpRadioButton option="Graphic Designing" name="photographydomain" checked={formData.photographydomain === "Graphic Designing"} onChange={handleChange} />
        <InpRadioButton option="Video Editing" name="photographydomain" checked={formData.photographydomain === "Video Editing"} onChange={handleChange} />
        <InpRadioButton option="Public Relations and Management" name="photographydomain" checked={formData.photographydomain === "Public Relations and Management"} onChange={handleChange} />
        <InpRadioButton option="None" name="photographydomain" checked={formData.photographydomain === "None"} onChange={handleChange} />
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

export default Photography