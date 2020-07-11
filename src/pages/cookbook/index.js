import React from "react"
import { gql } from "apollo-boost"
import Layout from "../../components/layout/layout"
import { useQuery } from "@apollo/react-hooks"
import { Link } from "gatsby"

const Cookbook = () => {
  const ME_QUERY = gql`
    {
      me {
        id
        username
        email
      }
    }
  `

  const { data, loading, error } = useQuery(ME_QUERY)

  if (loading) {
    console.log("loading")
  }

  if (data) {
    console.log(data)
  }

  return (
    <Layout>
      <div>Cookbook</div>
      <div>
        <Link to="/cookbook/creator">
          <button>dodaj</button>
        </Link>
      </div>
    </Layout>
  )
}

export default Cookbook
