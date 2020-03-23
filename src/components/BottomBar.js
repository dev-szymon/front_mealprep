import { Link } from "gatsby"
import React from "react"

const BottomBar = () => (
  <div
    style={{
      position: "fixed",
      bottom: 0,
      width: "100%",
      height: "70px",
      background: `linear-gradient(to right, rgb(46, 136, 88), rgb(12, 190, 154))`,
    }}
  >
    <div style={{ float: "right" }}>
      <Link to="/">
        <button className="btn">login</button>
      </Link>
    </div>
    <div style={{ float: "left" }}>
      <Link to="/">
        <button className="btn">back</button>
      </Link>
    </div>
  </div>
)

export default BottomBar
