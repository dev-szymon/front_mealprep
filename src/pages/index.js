import React, { useState } from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import LoginForm from "../components/LoginForm"
import RegisterForm from "../components/RegisterForm"
import SecondaryNav from "../components/SecondaryNav"
import { setAccessToken } from "../auth"

const IndexPage = () => {
  const [primaryView, setPrimaryView] = useState(true)

  return (
    <Layout>
      <SEO title="Home" />
      <SecondaryNav
        primaryView={primaryView}
        setPrimaryView={setPrimaryView}
        primary="Rejestracja"
        secondary="Logowanie"
      />
      {primaryView ? <RegisterForm /> : <LoginForm />}
      <button
        onClick={() => {
          setAccessToken("")
        }}
      >
        wyloguj
      </button>
    </Layout>
  )
}

export default IndexPage
