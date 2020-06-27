import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import CredentialsForm from "../components/CredentialsForm"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <CredentialsForm form="register" />
    </Layout>
  )
}

export default IndexPage
