import React from "react"
import { gql } from "apollo-boost"
import { useMutation } from "@apollo/react-hooks"
import CredentialsForm from "./CredentialsForm"
import { setAccessToken } from "../auth"

const LoginForm = () => {
  const LOG_IN = gql`
    mutation logIn($email: String!, $password: String!) {
      logIn(email: $email, password: $password)
    }
  `

  const [logIn, { loading, error }] = useMutation(LOG_IN, {
    onCompleted: data => {
      setAccessToken(data.logIn)
    },
  })

  return <CredentialsForm action={logIn} form={"login"} />
}

export default LoginForm
