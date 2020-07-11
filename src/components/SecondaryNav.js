import React from "react"
import "./SecondaryNav.css"

const SecondaryNav = ({ primaryView, setPrimaryView, primary, secondary }) => {
  return (
    <nav className="secondary-nav">
      <ul>
        <li onClick={() => setPrimaryView(true)}>
          <span className={primaryView ? "active" : null}>{primary}</span>
        </li>
        <li onClick={() => setPrimaryView(false)}>
          <span className={!primaryView ? "active" : null}>{secondary}</span>
        </li>
      </ul>
    </nav>
  )
}

export default SecondaryNav
