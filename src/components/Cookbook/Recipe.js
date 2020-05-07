import React from "react"
import { IngredientsUsed } from "../../functions/index"
import gql from "graphql-tag"
import { useMutation } from "@apollo/react-hooks"

const DELETE_RECIPE = gql`
  mutation deleteRecipe($recipeID: ID!) {
    deleteRecipe(recipeID: $recipeID) {
      id
    }
  }
`

const Recipe = ({ data, refetch }) => {
  const {
    id,
    name,
    ingredients,
    createdBy,
    // public,  ?? do I need it here?
    description,
    prepTime,
    cookBooked,
    likes,
  } = data
  const [deleteRecipe] = useMutation(DELETE_RECIPE, {
    onCompleted() {
      refetch()
    },
  })

  return (
    <div>
      <h3>{name}</h3>
      <div>ingredients: {<IngredientsUsed ingredients={ingredients} />}</div>
      <p>{description}</p>
      <h5>preparation time: {prepTime}min</h5>
      <h4>author: {createdBy.username}</h4>
      <h4>likes: {likes.length}</h4>
      <h4>cookbooked: {cookBooked.length}</h4>
      <button
        type="button"
        onClick={() => {
          deleteRecipe({ variables: { recipeID: id } })
        }}
      >
        remove recipe
      </button>
    </div>
  )
}

export default Recipe
