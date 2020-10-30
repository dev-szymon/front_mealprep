import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import IngredientSelector from "../components/creator/ingredientSelector/IngredientSelector"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ height: "150px", position: "relative" }}></div>
      <IngredientSelector className="ingredient-selector" />

      <div style={{ height: "150px", position: "relative" }}></div>

      <div style={{ height: "150px", position: "relative" }}></div>

      <div style={{ height: "150px", position: "relative" }}></div>

      <div style={{ height: "150px", position: "relative" }}></div>

      <div style={{ height: "150px", position: "relative" }}></div>

      <div style={{ height: "150px", position: "relative" }}></div>
    </Layout>
  )
}

export default IndexPage
