import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../../images/logo.svg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      width: "100%",
      height: "48px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "2px solid rgba(0,0,0,0.55)",
    }}
  >
    <h1 style={{ width: "fit-content", fontFamily: "Montserrat, sans-serif" }}>
      <Link
        to="/"
        style={{
          color: "rgba(0,0,0, 0.55)",
          display: "block",
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
    <img
      src={Logo}
      alt="ananaX logo"
      style={{ height: "36px", width: "36px" }}
    />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
