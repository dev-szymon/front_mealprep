import React, { useState } from "react"
import Nav from "../layout/Nav"
import Recipes from "../Cookbook/Recipes"

const Cookbook = ({ recipesCreated, recipesSaved }) => {
  const [myRecipes, setMyRecipes] = useState(true)
  return (
    <div>
      <section style={{ padding: "0 20px" }}>
        <Nav>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button type="button" onClick={() => setMyRecipes(true)}>
              My recipes
            </button>
            <button type="button" onClick={() => setMyRecipes(false)}>
              Saved
            </button>
          </div>
        </Nav>
        {myRecipes ? (
          <>
            <h1>Created recipes</h1>
            <Recipes recipeGroup={recipesCreated} />
            <button type="button" className="btn">
              new recipe
            </button>
          </>
        ) : (
          <>
            <h1>Saved recipes</h1>
            <Recipes recipeGroup={recipesSaved} />
          </>
        )}
      </section>
    </div>
  )
}

export default Cookbook
