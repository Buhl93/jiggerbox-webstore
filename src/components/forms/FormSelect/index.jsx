import React from 'react'

const FormSelect = ({ options, defaultValue, handleChange, label, ...otherProps}) => {
    if (!Array.isArray(options) || options.length < 1) return null;
    
    return (
        <div className='formRow'>
            {/* Displays label only if label is passed as a prop */}
            {label && (
                <label>
                    {label}
                </label>
            )}

            <select className='formSelect' value={defaultValue} onChange={handleChange} {...otherProps}>
                {/* Iterate over options object, and deconstruct value and name from it. Return each option */}
                {options.map((option, index) => {
                    const { value, name } = option;

                    return (
                        <option key={index} value={value}>
                            {name}
                        </option>
                    )
                })}

            </select>
            
        </div>
    )
}

export default FormSelect
