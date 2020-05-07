import React, { useState } from "react"
import Nav from "../layout/Nav"
import Recipes from "../Cookbook/Recipes"

const CookbookView = ({ recipesCreated, recipesSaved, refetch }) => {
  const [myRecipes, setMyRecipes] = useState(true)
  return (
    <div>
      <section style={{ padding: "0 20px" }}>
        <Nav>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button
              className="btn"
              type="button"
              onClick={() => setMyRecipes(true)}
            >
              My recipes
            </button>
            <button
              className="btn"
              type="button"
              onClick={() => setMyRecipes(false)}
            >
              Saved
            </button>
          </div>
        </Nav>
        {myRecipes ? (
          <>
            <h1>Created recipes</h1>
            <Recipes
              refetch={refetch}
              recipeGroup={recipesCreated}
              actionText={"Make a new recipe!"}
            />
            <button type="button" className="btn">
              new recipe
            </button>
          </>
        ) : (
          <>
            <h1>Saved recipes</h1>
            <Recipes
              refetch={refetch}
              recipeGroup={recipesSaved}
              actionText={"Make a new recipe or browse other people recipes!"}
            />
            <button type="button" className="btn">
              new recipe
            </button>
          </>
        )}
      </section>
    </div>
  )
}

export default CookbookView
