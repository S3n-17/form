import React from 'react'
import './inp.css'

const InpRadioButton = ({ option, name, required, checked, onChange }) => {
    // Prefixing with name prevents ID collisions between different sections
    const inputId = `${name}-${option}`;

    return (
        <div className="radio-option">
            <input 
                type="radio"
                id={inputId}
                name={name}
                value={option}
                required={required}
                checked={checked}
                onChange={onChange} />
            <label htmlFor={inputId} className="form-check-label">
                {option}
            </label>
        </div>
    )
}

const Checkbox = ({ option, name, required, checked, onChange }) => {
    const inputId = `${name}-${option}`;

    return (
        <div className="radio-option">
            <input 
                type="checkbox" 
                id={inputId}  
                name={name} 
                value={option} 
                required={required} 
                checked={checked} 
                onChange={onChange} />
            <label htmlFor={inputId} className="form-check-label">
                {option}
            </label>
        </div>
    )
}

export default InpRadioButton
export { Checkbox }