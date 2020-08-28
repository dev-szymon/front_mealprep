import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { getAccessToken } from "../auth"
import { gql } from "apollo-boost"
import { Link } from "gatsby"
import { useQuery } from "@apollo/react-hooks"
import LandingPage from "../components/LandingPage"

const IndexPage = () => {
  const ME_QUERY = gql`
    {
      me {
        username
      }
    }
  `
  const { data, loading, error } = useQuery(ME_QUERY)

  return (
    <Layout>
      <SEO title="Home" />
      {getAccessToken() === "" ? (
        <div className="landing-container">
          <button className="action-button">
            <Link to="/app/auth">Zaloguj się</Link>
          </button>
        </div>
      ) : (
        <LandingPage loading={loading} data={data} />
      )}
    </Layout>
  )
}

export default IndexPage
