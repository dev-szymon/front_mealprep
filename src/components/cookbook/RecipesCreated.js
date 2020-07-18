import React from "react"
import { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"
import Loading from "../Loading"
import RecipeCard from "../RecipeCard"

const RecipesCreated = () => {
  const RECIPES_CREATED_QUERY = gql`
    {
      me {
        id
        username
        recipesCreated {
          id
          name
          createdBy {
            username
            id
          }
          kcal
          likesNumber
          cookbookedNumber
        }
      }
    }
  `
  const { data, loading, error } = useQuery(RECIPES_CREATED_QUERY)

  if (loading) {
    return <Loading />
  }

  if (data) {
    return (
      <>
        {data.me.recipesCreated.map(r => (
          <RecipeCard recipe={r} />
        ))}
      </>
    )
  }
}

export default RecipesCreated
