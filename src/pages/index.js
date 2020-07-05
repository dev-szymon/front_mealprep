import React, { useState } from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import LoginForm from "../components/LoginForm"
import RegisterForm from "../components/RegisterForm"
import SecondaryNav from "../components/SecondaryNav"

const IndexPage = () => {
  const [primaryView, setPrimaryView] = useState(true)

  return (
    <Layout>
      <SEO title="Home" />
      <SecondaryNav
        setPrimaryView={setPrimaryView}
        primary="Rejestracja"
        secondary="Logowanie"
      />
      {primaryView ? <RegisterForm /> : <LoginForm />}
      <button onClick={() => localStorage.setItem("token", null)}>
        wyloguj
      </button>
    </Layout>
  )
}

export default IndexPage
