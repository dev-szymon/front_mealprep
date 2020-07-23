import React from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../auth/PrivateRoute"
import Cookbook from "../components/cookbook/index"
import Creator from "../components/creator/creator"
import Authorization from "../auth/auth"
import RecipePage from "../components/RecipePage"
import IngredientPage from "../components/IngredientPage"

const App = () => {
  return (
    <Router>
      <PrivateRoute path="/app/cookbook" component={Cookbook} />
      <PrivateRoute path="/app/creator" component={Creator} />
      <Authorization path="/app/auth" />
      <RecipePage path="/app/recipes/:id" />
      <IngredientPage path="/app/ingredients/:id" />
    </Router>
  )
}

export default App
