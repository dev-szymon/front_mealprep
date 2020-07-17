import React, { useState } from "react"
import Layout from "../components/layout/layout"
import LoginForm from "../components/LoginForm"
import RegisterForm from "../components/RegisterForm"
import SecondaryNav from "../components/SecondaryNav"

const Authorization = () => {
  const [primaryView, setPrimaryView] = useState(true)

  return (
    <Layout hideMenuBar={true}>
      <SecondaryNav
        primaryView={primaryView}
        setPrimaryView={setPrimaryView}
        primary="Rejestracja"
        secondary="Logowanie"
      />
      {primaryView ? <RegisterForm /> : <LoginForm />}
    </Layout>
  )
}

export default Authorization
