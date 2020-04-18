import React, { useContext } from "react"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import { globalContext } from "../../context/globalContext"
import CookbookView from "./CookbookView"
import Loading from "../Loading"

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
        }
        likes {
          id
          username
        }
        cookBooked {
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
        }
        name
        prepTime
        cookBooked {
          id
          username
        }
      }
    }
  }
`
const CookbookContainer = () => {
  const context = useContext(globalContext)
  const { id } = context.state.user
  const { loading, data } = useQuery(RECIPE_BOOKS_QUERY, {
    variables: { id: id },
  })

  if (loading) return <Loading />
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
