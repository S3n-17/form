import React, {useState} from 'react'
import InpInputBox from './inp-input-box'
import InpRadioButton from './inp-radio-button'
import '../App.css'
import { Route, Router, useNavigate } from 'react-router-dom'
import Navbar from './navbar'
const VideoEditing = () => {
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
      <h2 style={{ color: "white", fontWeight: "500" }}>Video Editing</h2>
      <br></br>
      <form onSubmit={(e) => {
        e.preventDefault()

        const selected = document.querySelector(
          'input[name="vedomain"]:checked'
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
        <InpInputBox question="Why do you want to join the Video Editing team?" name="whyJoinVideoEditing" value={formData.whyJoinVideoEditing} onChange={handleChange} required />
        <br></br>
        <InpInputBox question="Which video editing software/tools are you familiar with?" name="videoEditingSoftware" value={formData.videoEditingSoftware} onChange={handleChange} required />
        <br></br>
        <InpInputBox question="What type of videos do you enjoy editing?" name="videoTypes" value={formData.videoTypes} onChange={handleChange} required />
        <br></br>
        <InpInputBox question="What do you think makes a video engaging?" name="videoEngagement" value={formData.videoEngagement} onChange={handleChange} required />
        <br></br>
        <InpInputBox question="Share the link for any work you have done in video editing" name="videoEditingWork" value={formData.videoEditingWork} onChange={handleChange} required />
        <br></br>
        <InpInputBox question="What are you hoping to learn or gain from being a part of the society?" name="learnings" value={formData.learnings} onChange={handleChange} required />
        <h3 className="q" style={{ padding: "0 0 0 100px", color: "white", fontWeight: "500" }}>Any other domain you want to apply for</h3>
        <br></br>
        <InpRadioButton option="Content Writing" name="vedomain" checked={formData.vedomain === "Content Writing"} onChange={handleChange} />
        <InpRadioButton option="Technical" name="vedomain" checked={formData.vedomain === "Technical"} onChange={handleChange} />
        <InpRadioButton option="Graphic Designing" name="vedomain" checked={formData.vedomain === "Graphic Designing"} onChange={handleChange} />
        <InpRadioButton option="Public Relations and Management" name="vedomain" checked={formData.vedomain === "Public Relations and Management"} onChange={handleChange} />
        <InpRadioButton option="Photography" name="vedomain" checked={formData.vedomain === "Photography"} onChange={handleChange} />
        <InpRadioButton option="None" name="vedomain" checked={formData.vedomain === "None"} onChange={handleChange} />
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

export default VideoEditing