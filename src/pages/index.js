import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hello, World!</h1>
    </Layout>
  )
}

export default IndexPage
