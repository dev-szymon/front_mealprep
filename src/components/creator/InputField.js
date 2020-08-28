import React from "react"

const InputField = ({ type, inputFor, onChange, text, className, onClick }) => {
  return (
    <div className={className}>
      <label htmlFor={inputFor}>{text}</label>
      {type === "textarea" ? (
        <textarea name={inputFor} onChange={onChange}></textarea>
      ) : (
        <input
          type={type}
          name={inputFor}
          onChange={onChange}
          min="0"
          step="0.01"
        />
      )}
    </div>
  )
}

export default InputField
