import React from "react"
import { Link } from "gatsby"
import Home from "../../images/home.svg"
import Calendar from "../../images/calendar.svg"
import Book from "../../images/book.svg"
import Dots from "../../images/dots.svg"

const MenuBar = () => (
  <nav
    style={{
      position: "fixed",
      bottom: "0",
      display: "flex",
      alignItems: "center",
      width: "80vw",
      height: "48px",
      borderTop: "2px solid rgba(0,0,0,0.55)",
    }}
  >
    <ul
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
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
        <Link to="/cookbook">
          <img style={{ height: "24px" }} src={Book} alt="navigation book" />
        </Link>
      </li>
      <li>
        <img
          style={{ height: "24px" }}
          src={Dots}
          alt="navigation more options"
        />
      </li>
    </ul>
  </nav>
)

export default MenuBar
