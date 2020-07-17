import React, { useState } from "react"
import Layout from "../layout/layout"
import { Link } from "gatsby"
import SecondaryNav from "../SecondaryNav"
import RecipesCreated from "./RecipesCreated"
import RecipesSaved from "./RecipesSaved"

const Cookbook = () => {
  const [primaryView, setPrimaryView] = useState(true)

  return (
    <Layout>
      <SecondaryNav
        setPrimaryView={setPrimaryView}
        primary="Stworzone"
        secondary="Zapisane"
        primaryView={primaryView}
      />
      {primaryView ? <RecipesCreated /> : <RecipesSaved />}
      <Link to="/app/creator">
        <button>dodaj</button>
      </Link>
    </Layout>
  )
}

export default Cookbook
