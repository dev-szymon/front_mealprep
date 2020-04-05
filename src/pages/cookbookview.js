import React, { useContext } from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Cookbook from "../components/Cookbook/Cookbook"
import { globalContext } from "../context/globalContext"

const CookbookView = () => {
  const context = useContext(globalContext)
  const { recipesCreated, recipesSaved } = context.state.user
  console.log(recipesCreated)
  return (
    <Layout>
      <SEO title="Weekly plan of your diet." />
      <div
        style={{
          position: "relative",
          top: "120px",
          paddingBottom: "60px",
        }}
      >
        <Cookbook recipesCreated={recipesCreated} recipesSaved={recipesSaved} />
      </div>
    </Layout>
  )
}

export default CookbookView
