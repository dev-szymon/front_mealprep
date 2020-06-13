import React from "react"
import Layout from "../components/layout/layout"
import Loading from "../components/Loading"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import SEO from "../components/seo"

const IndexPage = () => {
  const USERS_QUERY = gql`
    query {
      getUsers {
        username
        id
      }
    }
  `
  const { loading, data } = useQuery(USERS_QUERY)
  if (data) {
    console.log(data)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hello World</h1>
      <p>index page</p>
      {loading ? (
        <Loading />
      ) : (
        data.getUsers.map(u => {
          return (
            <div>
              <h1>{u.username}</h1>
              <p>{u.id}</p>
            </div>
          )
        })
      )}
    </Layout>
  )
}

export default IndexPage
