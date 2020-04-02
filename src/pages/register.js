import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import RegisterForm from "../components/forms/RegisterForm"

const Register = () => (
  <Layout>
    <SEO title="Weekly plan of your diet." />
    <div className="container">
      <RegisterForm />
    </div>
  </Layout>
)

export default Register
