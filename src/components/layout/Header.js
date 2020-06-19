import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      width: "100%",
      height: "50px",
      background: `linear-gradient(to right, rgb(46, 136, 88), rgb(12, 190, 154))`,
      display: "flex",
      alignItems: "flex-end",
      zIndex: "1",
    }}
  >
    <h1
      style={{
        width: "fit-content",
        marginLeft: "1rem",
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          display: "block",
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
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
