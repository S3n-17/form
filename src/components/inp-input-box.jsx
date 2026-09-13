import React from 'react'
import './inp.css'
import '.././App.css'
const InpInputBox = ({ required, text, question }) => {
    return (
        <div className="question-container">
            <h3 className="form">{question}</h3>
            <br></br>
            <input type={text} className="form" id="placeholder" placeholder=" " required={required} />
        </div>
    )
}

export default InpInputBox
