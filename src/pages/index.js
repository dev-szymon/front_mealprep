import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { getAccessToken } from "../auth"
import { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"
import Loading from "../components/Loading"

const IndexPage = () => {
  const ME_QUERY = gql`
    {
      me {
        username
      }
    }
  `
  const { data, loading, error } = useQuery(ME_QUERY)
  if (loading) {
    return <Loading />
  }

  return (
    <Layout>
      <SEO title="Home" />
      <h1>
        {getAccessToken() === ""
          ? "Dzień Dobry!"
          : `Dzień dobry, ${data.me.username}`}
      </h1>
    </Layout>
  )
}

export default IndexPage
