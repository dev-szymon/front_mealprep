import React, { useContext } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { globalContext } from "../context/globalContext"

const IndexPage = () => {
  const context = useContext(globalContext)
  const { user } = context.state
  return (
    <Layout>
      <SEO title="Home" />

      <Link to="/weekView/">Go to register</Link>
    </Layout>
  )
}

export default IndexPage
