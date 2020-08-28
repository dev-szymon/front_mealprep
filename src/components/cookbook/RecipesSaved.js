import React from "react"
import { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"
import Loading from "../Loading"
import RecipeCard from "../RecipeCard"

// abstract component, passing only query
const RecipesSaved = () => {
  const RECIPES_SAVED_QUERY = gql`
    {
      me {
        id
        username
        recipesSaved {
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
  const { data, loading, error } = useQuery(RECIPES_SAVED_QUERY)

  if (error) {
    console.log(error)
  }
  if (loading) {
    return <Loading />
  }

  if (data && data.me.recipesSaved.length < 1) {
    return <p>browse recipes</p>
  } else {
    return (
      <>
        {data.me.recipesSaved.map(r => (
          <RecipeCard key={r.id} recipe={r} />
        ))}
      </>
    )
  }
}

export default RecipesSaved
