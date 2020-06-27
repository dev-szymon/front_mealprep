import React from "react"
import Home from "../../images/home.svg"
import Calendar from "../../images/calendar.svg"
import Book from "../../images/book.svg"
import Dots from "../../images/dots.svg"

const MenuBar = () => (
  <nav
    style={{
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
        <img style={{ height: "24px" }} src={Home} />
      </li>
      <li>
        <img style={{ height: "24px" }} src={Calendar} />
      </li>
      <li>
        <img style={{ height: "24px" }} src={Book} />
      </li>
      <li>
        <img style={{ height: "24px" }} src={Dots} />
      </li>
    </ul>
  </nav>
)

export default MenuBar
