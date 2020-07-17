import React, { useState } from "react"
import Layout from "../layout/layout"
import IngredientCreator from "./IngredientCreator"
import RecipeCreator from "./RecipeCreator"
import SecondaryNav from "../SecondaryNav"

const Creator = () => {
  const [primaryView, setPrimaryView] = useState(true)
  return (
    <Layout>
      <SecondaryNav
        setPrimaryView={setPrimaryView}
        primary="Przepis"
        secondary="Składnik"
        primaryView={primaryView}
      />
      {primaryView ? <RecipeCreator /> : <IngredientCreator />}
    </Layout>
  )
}

export default Creator
