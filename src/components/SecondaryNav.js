import React from "react"
import "./SecondaryNav.css"

const SecondaryNav = ({ primaryView, setPrimaryView, primary, secondary }) => {
  return (
    <nav className="secondary-nav">
      <ul>
        <li
          onClick={() => setPrimaryView(true)}
          className={primaryView ? "active" : null}
        >
          {primary}
        </li>
        <li
          onClick={() => setPrimaryView(false)}
          className={!primaryView ? "active" : null}
        >
          {secondary}
        </li>
      </ul>
    </nav>
  )
}

export default SecondaryNav
