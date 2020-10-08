import React, { useState } from "react"
import { Link, navigate } from "gatsby"
import Home from "../../images/home.svg"
import Calendar from "../../images/calendar.svg"
import Book from "../../images/book.svg"
import Dots from "../../images/dots.svg"
import "./MenuBar.css"

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      {isOpen ? (
        <div onClick={() => setIsOpen(false)} className="outside-click"></div>
      ) : null}
      <nav className={`menu-bar__popup ${isOpen ? "open" : null}`}>
        <ul>
          <li>Profil</li>
          <li>Ustawienia</li>
          <li>Statystyki</li>
          <li>Blog</li>
          <li
            onClick={() => {
              navigate("/app/auth")
            }}
          >
            Wyloguj
          </li>
        </ul>
      </nav>
      <nav className="menu-bar">
        <button>
          <Link to="/">
            <img style={{ height: "24px" }} src={Home} alt="navigation home" />
          </Link>
        </button>
        <button>
          <img
            style={{ height: "24px" }}
            src={Calendar}
            alt="navigation calendar"
          />
        </button>

        <button>
          <Link to="/app/cookbook">
            <img style={{ height: "24px" }} src={Book} alt="navigation book" />
          </Link>
        </button>
        <button
          style={{
            width: "24px",
            maxHeight: "24px",
            display: "flex",
            justifyContent: "center",
            outline: "none",
          }}
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          <img
            style={{ height: "24px" }}
            src={Dots}
            alt="navigation more options"
          />
        </button>
      </nav>
    </>
  )
}

export default MenuBar
