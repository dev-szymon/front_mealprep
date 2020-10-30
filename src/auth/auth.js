import React, { useState } from "react"
import Layout from "../components/layout/layout"
// import LoginForm from "../components/credentialsForm/LoginForm"
import RegisterForm from "../components/credentialsForm/RegisterForm"
import SecondaryNav from "../components/SecondaryNav"
import LoginFormik from "../components/forms/LoginFormik"

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
      {primaryView ? (
        <RegisterForm />
      ) : (
        <div className="landing-container">
          <LoginFormik />
        </div>
      )}
    </Layout>
  )
}

export default Authorization
