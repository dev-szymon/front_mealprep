import React from "react"

const InputField = ({
  type,
  inputFor,
  onChange,
  text,
  className,
  placeholder,
  onClick,
  ...rest
}) => {
  return (
    <div className={className}>
      {text ? <label htmlFor={inputFor}>{text}</label> : null}
      {type === "textarea" ? (
        <textarea name={inputFor} onChange={onChange} {...rest}></textarea>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          name={inputFor}
          onChange={onChange}
          {...rest}
          min="0"
          step="0.01"
        />
      )}
    </div>
  )
}

export default InputField
