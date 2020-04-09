import React, { useContext } from "react"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import { globalContext } from "../../context/globalContext"
import CookbookView from "./CookbookView"

const RECIPE_BOOKS_QUERY = gql`
  query getLoggedIn($id: ID!) {
    getUser(id: $id) {
      recipesSaved {
        description
        id
        name
        prepTime
        createdBy {
          id
          username
        }
        ingredients {
          carbs
          fats
          id
          kcal
          name
          protein
        }
        likes {
          id
          username
        }
      }
      recipesCreated {
        description
        id
        createdBy {
          id
          username
        }
        likes {
          id
          username
        }
        ingredients {
          carbs
          fats
          id
          kcal
          name
          protein
        }
        name
        prepTime
      }
    }
  }
`
const CookbookContainer = () => {
  const context = useContext(globalContext)
  const { id } = context.state.user
  const { loading, error, data } = useQuery(RECIPE_BOOKS_QUERY, {
    variables: { id: id },
  })

  if (loading) return null
  return (
    <div
      style={{
        position: "relative",
        top: "120px",
        paddingBottom: "60px",
      }}
    >
      <CookbookView
        recipesCreated={data.getUser.recipesCreated}
        recipesSaved={data.getUser.recipesSaved}
      />
    </div>
  )
}

export default CookbookContainer
