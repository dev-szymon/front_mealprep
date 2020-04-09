import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import CookbookContainer from "../components/Cookbook/CookbookContainer"

const Cookbook = () => {
  return (
    <Layout>
      <SEO title="Weekly plan for your diet." />
      <CookbookContainer />
    </Layout>
  )
}

export default Cookbook
