import React, { useContext } from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { globalContext } from "../context/globalContext"
import LoginForm from "../components/forms/LoginForm"

const IndexPage = () => {
  const context = useContext(globalContext)
  const { user } = context.state
  console.log(user)

  return (
    <Layout>
      <SEO title="Home" />
      {user === null ? (
        <div className="container">
          <LoginForm />
        </div>
      ) : (
        <>
          <h1 style={{ position: "absolute", top: "170px" }}>
            Hello {user.name}
          </h1>
        </>
      )}
    </Layout>
  )
}

export default IndexPage
