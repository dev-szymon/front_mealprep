import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../../images/logo.svg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      width: "100%",
      height: "68px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "2px solid rgba(0,0,0,0.55)",
      zIndex: "100",
    }}
  >
    <h1 style={{ width: "fit-content" }}>
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
    <img src={Logo} alt="ananaX logo" />
  </header>
)

// linear-gradient(to right, rgb(46, 136, 88), rgb(147, 26, 176));
// linear-gradient(to right, rgb(46, 136, 88), rgb(119, 190, 12));
// linear-gradient(to right, rgb(46, 136, 88), rgb(61, 92, 141));
// linear-gradient(to right, rgb(46, 136, 88), rgb(12, 190, 154));

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
