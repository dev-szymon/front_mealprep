import React, { useContext } from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { globalContext } from "../context/globalContext"
import { MealplanContextProvider } from "../context/mealplanContext"
import WelcomePage from "../components/forms/WelcomePage"
import Homeview from "../components/homeview/Homeview"

const IndexPage = () => {
  const context = useContext(globalContext)
  const { user } = context.state

  return (
    <Layout>
      <SEO title="Home" />
      {user === null ? (
        <WelcomePage />
      ) : (
        <div
          style={{
            position: "relative",
            top: "120px",
            paddingBottom: "60px",
          }}
        >
          <MealplanContextProvider>
            <Homeview />
          </MealplanContextProvider>
        </div>
      )}
    </Layout>
  )
}

export default IndexPage
