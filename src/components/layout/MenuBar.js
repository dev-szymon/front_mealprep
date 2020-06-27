import React from "react"
import Home from "../../images/home.svg"
import Calendar from "../../images/calendar.svg"
import Book from "../../images/book.svg"
import Dots from "../../images/dots.svg"

const MenuBar = () => (
  <nav
    style={{
      position: "fixed",
      display: "flex",
      alignItems: "center",
      bottom: "0",
      width: "80vw",
      height: "48px",
      borderTop: "2px solid rgba(0,0,0,0.55)",
      zIndex: "100",
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
        <img src={Home} />
      </li>
      <li>
        <img src={Calendar} />
      </li>
      <li>
        <img src={Book} />
      </li>
      <li>
        <img src={Dots} />
      </li>
    </ul>
  </nav>
)

export default MenuBar
