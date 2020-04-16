import React from "react"
import WeekContainer from "../components/Week/WeekContainer"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const Week = () => {
  return (
    <Layout>
      <SEO title="Weekly plan for your diet." />
      <WeekContainer />
    </Layout>
  )
}

export default Week
