import React from "react"
import { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"
import Layout from "../components/layout/layout"

const RecipePage = ({ id }) => {
  const INGREDIENT_QUERY = gql`
    query getIngredient($id: ID!) {
      getIngredient(id: $id) {
        id
        name
        kcal
        carbs
        protein
        glycemicIndex
        fats
      }
    }
  `

  const { data, loading, error } = useQuery(INGREDIENT_QUERY, {
    variables: { id: id },
  })

  if (loading) {
    return <h1>Loading</h1>
  }

  if (error) {
    return <h1>Error finding ingredient</h1>
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
