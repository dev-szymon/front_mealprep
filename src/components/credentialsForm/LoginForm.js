import React from "react"
import { gql } from "apollo-boost"
import { useMutation } from "@apollo/react-hooks"
import CredentialsForm from "./CredentialsForm"
import { navigate } from "gatsby"

const LoginForm = () => {
  const LOG_IN = gql`
    mutation logIn($email: String!, $password: String!) {
      logIn(email: $email, password: $password)
    }
  `

  const [logIn] = useMutation(LOG_IN, {
    onCompleted: data => {
      console.log(data)
      navigate("/")
    },
  })

  return (
    <CredentialsForm action={logIn} form={"login"} buttonText="zaloguj się" />
  )
}

export default LoginForm
