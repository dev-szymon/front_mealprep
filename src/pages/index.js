import React, { useState } from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import LoginForm from "../components/LoginForm"
import RegisterForm from "../components/RegisterForm"

const IndexPage = () => {
  const [registerView, setRegisterView] = useState(true)
  return (
    <Layout>
      <SEO title="Home" />
      <nav>
        <ul>
          <li onClick={() => setRegisterView(false)}>Logowanie</li>
          <li onClick={() => setRegisterView(true)}>Rejestracja</li>
        </ul>
      </nav>
      {registerView ? <RegisterForm /> : <LoginForm />}
      <button onClick={() => localStorage.setItem("token", null)}>
        log out
      </button>
    </Layout>
  )
}

export default IndexPage
