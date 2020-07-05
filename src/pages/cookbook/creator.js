import React, { useState } from "react"
import Layout from "../../components/layout/layout"
import IngredientCreator from "../../components/creator/IngredientCreator"
import RecipeCreator from "../../components/creator/RecipeCreator"
import SecondaryNav from "../../components/SecondaryNav"

const CreateIngredient = () => {
  const [primaryView, setPrimaryView] = useState(true)
  return (
    <Layout>
      <SecondaryNav
        setPrimaryView={setPrimaryView}
        primary="Przepis"
        secondary="Składnik"
      />
      {primaryView ? <RecipeCreator /> : <IngredientCreator />}
    </Layout>
  )
}

export default CreateIngredient
