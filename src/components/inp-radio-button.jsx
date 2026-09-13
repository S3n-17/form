import React from 'react'
import './inp.css'

const InpRadioButton = ({ option, name, required }) => {
    return (
        <div className="radio-option">
            <input type="radio" id={option}  name={name} value={option} required={required} />
            <label htmlFor={option} className="form-check-label">
                {option}
            </label>
        </div>
    )
}

const Checkbox = ({ option, name, required }) => {
    return (
        <div className="radio-option">
            <input type="checkbox" id={option}  name={name} value={option} required={required} />
            <label htmlFor={option} className="form-check-label">
                {option}
            </label>
        </div>
    )
}

export default InpRadioButton
export { Checkbox }