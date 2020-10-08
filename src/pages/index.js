import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="landing-container">strona główna</div>
    </Layout>
  )
}

export default IndexPage
