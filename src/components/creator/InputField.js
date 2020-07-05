import React from "react"

const InputField = ({ type, inputFor, onChange, text }) => {
  return (
    <div>
      <label htmlFor={inputFor}>{text}</label>
      {type === "textarea" ? (
        <textarea name={inputFor} onChange={onChange}></textarea>
      ) : (
        <input type={type} name={inputFor} onChange={onChange} />
      )}
    </div>
  )
}

export default InputField
