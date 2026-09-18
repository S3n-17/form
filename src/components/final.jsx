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
            <button className="submit-button" onClick={async () => {
                if (window.confirm("Are you sure you want to submit the form? Once submitted, you won't be able to make any changes.")) {

                    const formData = JSON.parse(localStorage.getItem("formData"));

                    const data = new URLSearchParams();
                    data.append("data", JSON.stringify(formData));

                    await fetch("https://script.google.com/macros/s/AKfycby9Pjhl4kpJ4FlV1p3xRyrMDkDEDB9quIWYSAQZ_7uJmLLeoGxyKfbwmcrLJ7UcqGfj/exec", {
                        method: "POST",
                        body: data
                    });

                    localStorage.removeItem("formData");
                    window.location.href = "/submitted";
                }
            }}>
                Submit
            </button>
        </>

    )
}

export default Final
