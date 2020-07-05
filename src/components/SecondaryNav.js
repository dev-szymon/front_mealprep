import React from "react"

const SecondaryNav = ({ setPrimaryView, primary, secondary }) => {
  return (
    <nav>
      <ul>
        <li onClick={() => setPrimaryView(true)}>{primary}</li>
        <li onClick={() => setPrimaryView(false)}>{secondary}</li>
      </ul>
    </nav>
  )
}

export default SecondaryNav
