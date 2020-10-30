import React from "react"
import { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"
import Loading from "../Loading"
import RecipeCard from "./RecipeCard"

const RecipesCreated = () => {
  const RECIPES_CREATED_QUERY = gql`
    {
      me {
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

  if (error) {
    console.log(error)
    return <p style={{marginTop: '4rem'}}>please log in</p>
  }

  if (loading) {
    return <Loading />
  }

  if (data) {
    return (
      <>
        {data.me.recipesCreated.map(r => (
          <RecipeCard key={r.id} recipe={r} />
        ))}
      </>
    )
  }
}

export default RecipesCreated
