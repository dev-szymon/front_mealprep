import React from "react"
import Recipe from "../../components/Recipe"

const Recipes = ({ recipeGroup }) => {
  console.log(recipeGroup)
  return (
    <div>
      {recipeGroup.length === 0
        ? "Make new recipe!"
        : recipeGroup.map(r => <Recipe key={r.id} data={r} />)}
    </div>
  )
}

export default Recipes
