import React from "react"

const ActionButton = ({ onClick, type, className, buttonText }) => {
  return (
    <button
      style={{
        width: "100%",
        backgroundColor: "var(--green)",
        borderRadius: "0.5rem",
        color: "white",
        height: 36,
        border: "none",
      }}
      className={className}
      type={type}
      onClick={onClick}
    >
      {buttonText}
    </button>
  )
}

export default ActionButton
