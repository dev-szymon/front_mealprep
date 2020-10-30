import React from "react"

const ActionButton = ({ type, className, buttonText, ...rest }) => {
  return (
    <button
      style={{
        width: "100%",
        backgroundColor: "var(--green)",
        borderRadius: "0.5rem",
        color: "white",
        height: 36,
        border: "none",
        fontWeight: 400,
      }}
      className={className}
      type={type}
      {...rest}
    >
      {buttonText}
    </button>
  )
}

export default ActionButton
