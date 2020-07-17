import React from "react"
import { gql } from "apollo-boost"
import { useMutation } from "@apollo/react-hooks"
import CredentialsForm from "./CredentialsForm"
import { setAccessToken } from "../auth"
import { navigate } from "gatsby"

const LoginForm = () => {
  const LOG_IN = gql`
    mutation logIn($email: String!, $password: String!) {
      logIn(email: $email, password: $password)
    }
  `

  const [logIn] = useMutation(LOG_IN, {
    onCompleted: data => {
      setAccessToken(data.logIn)
      navigate("/")
    },
  })

  return <CredentialsForm action={logIn} form={"login"} />
}

export default LoginForm
