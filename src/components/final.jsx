import React from 'react'
import '../App.css'
import Navbar from './navbar'
const Final = () => {
    return (
        <>
            <Navbar />
            <br></br>
            <div id="final">
                Thank You for filling the form. We will get back to you soon. Stay tuned for further updates.
            </div>
            <button className="submit-button" onClick={() => {
                alert("Are you sure you want to submit the form? Once submitted, you won't be able to make any changes.")
                if (window.confirm("Are you sure you want to submit the form? Once submitted, you won't be able to make any changes.")) {
                    localStorage.removeItem("formData")
                    window.location.href = "/submitted"
                }
            }}>
                Submit
            </button>
        </>
    
    )
}

export default Final
