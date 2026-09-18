import React, {useState} from 'react'
import InpInputBox from './inp-input-box'
import InpRadioButton from './inp-radio-button'
import '../App.css'
import { Route, Router, useNavigate } from 'react-router-dom'
import Navbar from './navbar'
const ContentWriting = () => {
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
      <form onSubmit={(e) => {
        e.preventDefault()
        // const branch = document.querySelector(
        //   'input[name="branch"]:checked'
        // )

        // if (!branch) {
        //   alert("Please select a branch to proceed")
        //   return
        // }

        const selected = document.querySelector(
          'input[name="cwdomain"]:checked'
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

        <h2 style={{ color: "white", fontWeight: "500" }}>Content Writing</h2>
        <br></br>
        <InpInputBox question="Why do you want to join the Content Writing team?" name="whyJoinContentWriting" value={formData.whyJoinContentWriting} onChange={handleChange} required />
        <br></br>
        <InpInputBox question="What type of content do you enjoy writing the most?" name="contentType" value={formData.contentType} onChange={handleChange} required />
        <br></br>
        <InpInputBox question="What do you think makes a piece of content engaging?" name="engagingContent" value={formData.engagingContent} onChange={handleChange} required />
        <br></br>
        <InpInputBox question="Share a piece of writing you have written" name="writtenContent" value={formData.writtenContent} onChange={handleChange} required />
        <br></br>
        <InpInputBox question="What are you hoping to learn or gain from being a part of the society?" name="learnings" value={formData.learnings} onChange={handleChange} required />
        <div className="question-container">
        <h3 className="q" style={{ padding: "0 0 0 0px", color: "white", fontWeight: "500" }}>Any other domain you want to apply for</h3>
        <br></br>
        <InpRadioButton option="Technical" name="cwdomain" checked={formData.cwdomain === "Technical"} onChange={handleChange}/>
        <InpRadioButton option="Graphic Designing" name="cwdomain" checked={formData.cwdomain === "Graphic Designing"} onChange={handleChange}/>
        <InpRadioButton option="Photography" name="cwdomain" checked={formData.cwdomain === "Photography"} onChange={handleChange}/>
        <InpRadioButton option="Video Editing" name="cwdomain" checked={formData.cwdomain === "Video Editing"} onChange={handleChange}/>
        <InpRadioButton option="Public Relations and Management" name="cwdomain" checked={formData.cwdomain === "Public Relations and Management"} onChange={handleChange}/>
        <InpRadioButton option="None" name="cwdomain" checked={formData.cwdomain === "None"} onChange={handleChange} />
        <br></br>
        </div>
        <br></br>
        <button type="submit" className="button">
          Next
        </button>
        <button className="button" onClick={() => navigate(-1)}>
          Previous
        </button>

      </form>
    </div>

  )
}

export default ContentWriting