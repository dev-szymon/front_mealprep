import React from "react"
import Recipe from "./Recipe"

const Recipes = ({ recipeGroup, actionText }) => {
  return (
    <div>
      {recipeGroup.length === 0 ? (
        <p>{actionText}</p>
      ) : (
        recipeGroup.map(r => <Recipe key={r.id} data={r} />)
      )}
    </div>
  )
}

export default Recipes
