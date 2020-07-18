import React, { useState } from "react"
import { Link } from "gatsby"
import Home from "../../images/home.svg"
import Calendar from "../../images/calendar.svg"
import Book from "../../images/book.svg"
import Dots from "../../images/dots.svg"
import "./MenuBar.css"

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="menu-bar">
      <nav className={`menu-bar__popup ${isOpen ? "open" : null}`}>
        <ul>
          <li>Wyloguj</li>
        </ul>
      </nav>
      <ul>
        <li>
          <Link to="/">
            <img style={{ height: "24px" }} src={Home} alt="navigation home" />
          </Link>
        </li>
        <li>
          <img
            style={{ height: "24px" }}
            src={Calendar}
            alt="navigation calendar"
          />
        </li>
        <li>
          <Link to="/app/cookbook">
            <img style={{ height: "24px" }} src={Book} alt="navigation book" />
          </Link>
        </li>
        <li
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          <img
            style={{ height: "24px" }}
            src={Dots}
            alt="navigation more options"
          />
        </li>
      </ul>
    </nav>
  )
}

export default MenuBar
