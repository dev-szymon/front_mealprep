import React from "react"
import Recipe from "./Recipe"
import RecipeCreator from "./RecipeCreator"

const Recipes = ({ recipeGroup, actionText, refetch }) => {
  return (
    <div>
      {recipeGroup.length === 0 ? (
        <div>
          <p>{actionText}</p>
          <RecipeCreator refetch={refetch} />
        </div>
      ) : (
        recipeGroup.map(r => <Recipe key={r.id} data={r} refetch={refetch} />)
      )}
    </div>
  )
}

export default Recipes
