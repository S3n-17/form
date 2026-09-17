import React from 'react'
import './inp.css'
import '.././App.css'
const InpInputBox = ({ required, text, question, name, value, onChange }) => {
    return (
        <div className="question-container">
            <h3 className="form">{question}</h3>
            <br></br>
            <input 
                type={text || "text"}
                className="form"
                id="placeholder"
                placeholder=" "
                required={required}
                name={name}
                value={value || ""}
                onChange={onChange}
            />
        </div>
    )
}

export default InpInputBox
