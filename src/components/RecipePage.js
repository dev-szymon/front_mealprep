import React from "react"
import { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"
import Layout from "../components/layout/layout"

const RecipePage = ({ id }) => {
  const RECIPE_QUERY = gql`
    query getRecipe($id: ID!) {
      getRecipe(id: $id) {
        id
        name
        createdBy {
          id
          username
        }
        likesNumber
        cookbookedNumber
        kcal
        public
        ingredients {
          id
          name
        }
        description
      }
    }
  `

  const { data, loading, error } = useQuery(RECIPE_QUERY, {
    variables: { id: id },
  })

  if (loading) {
    return <h1>Loading</h1>
  }

  if (error) {
    return <h1>Error finding recipe</h1>
  }

  if (data) {
    console.log(data)
  }

  return (
    <Layout>
      <article>
        <h1>{id}</h1>
      </article>
    </Layout>
  )
}

export default RecipePage
