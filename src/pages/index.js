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
  const { loading, data, error } = useQuery(USERS_QUERY)

  if (error) {
    return (
      <Layout>
        <SEO title="Home" />
        <h1>Hello World</h1>
        <p>error</p>
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hello World</h1>
      <input
        type="file"
        id="avatar"
        style={{
          height: "68px",
          width: "68px",
          backgroundColor: "green",
        }}
        name="avatar"
        accept="image/png, image/jpeg"
      ></input>

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
