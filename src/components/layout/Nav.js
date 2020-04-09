import React from "react"
import "./Nav.css"
import { Link } from "gatsby"

const Nav = ({ children }) => {
  return (
    <div className="nav-container">
      <nav>
        {children}
        <ul>
          <li>Feed</li>
          <li>Week</li>
          <Link to="/cookbook">
            <li>Cookbook</li>
          </Link>
          <li>Cart</li>
        </ul>
      </nav>
    </div>
  )
}
export default Nav
