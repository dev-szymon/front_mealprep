import React from "react"
import Recipe from "./Recipe"

const Recipes = ({ recipeGroup }) => {
  return (
    <div>
      {recipeGroup.length === 0
        ? "Make new recipe!"
        : recipeGroup.map(r => <Recipe key={r.id} data={r} />)}
    </div>
  )
}

export default Recipes
