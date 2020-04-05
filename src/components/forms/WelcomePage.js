import React, { useEffect, useState } from "react"
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"
import "./WelcomePage.css"

const WelcomePage = () => {
  const [login, setLogin] = useState(false)
  useEffect(() => {}, [login])
  return (
    // <div style={{ padding: "100px 20px" }}>
    <div className="container">
      <h3 style={{ padding: "0 20px" }}>
        Share your recipes, manage your diet and grocery shopping all in one
        app!
      </h3>
      {login ? <LoginForm /> : <RegisterForm />}
      <div className="form-switch">
        <h3>{login ? `Do you want to join?` : `Already have an account?`}</h3>
        <button type="button" className="btn" onClick={() => setLogin(!login)}>
          {login ? `Join us!` : `Hop in!`}
        </button>
      </div>
    </div>
  )
}

export default WelcomePage
