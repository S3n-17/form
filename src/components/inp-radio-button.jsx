import React from 'react'
import './inp.css'

const InpRadioButton = ({ option }) => {
    return (
        <div className="radio-option">
            <input type="radio" id={option}  name="options" />
            <label htmlFor={option} className="form-check-label">
                {option}
            </label>
        </div>
    )
}

export default InpRadioButton
