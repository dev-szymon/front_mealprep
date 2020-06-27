/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import MenuBar from "./MenuBar"
import "./normalize.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "80vw",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <main style={{ height: "100%", overflow: "scroll" }}>{children}</main>
        <MenuBar />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
