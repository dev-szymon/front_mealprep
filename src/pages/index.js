import React, { useState } from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import LoginForm from "../components/LoginForm"
import RegisterForm from "../components/RegisterForm"
import SecondaryNav from "../components/SecondaryNav"
import Header from "../components/layout/Header"

const IndexPage = () => {
  const [primaryView, setPrimaryView] = useState(true)

  return (
    <Header/>
      <SEO title="Home" />
      <SecondaryNav
        primaryView={primaryView}
        setPrimaryView={setPrimaryView}
        primary="Rejestracja"
        secondary="Logowanie"
      />
      {primaryView ? <RegisterForm /> : <LoginForm />}
  )
}

export default IndexPage
