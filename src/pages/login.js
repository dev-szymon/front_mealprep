import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LoginForm from "../components/forms/LoginForm"

const Login = () => (
  <Layout>
    <SEO title="Weekly plan of your diet." />
    <div className="container">
      <LoginForm />
    </div>
  </Layout>
)

export default Login
