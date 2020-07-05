import React from "react"
import { gql } from "apollo-boost"
import { useMutation } from "@apollo/react-hooks"
import CredentialsForm from "./CredentialsForm"

const LoginForm = () => {
  const LOG_IN = gql`
    mutation logIn($email: String!, $password: String!) {
      logIn(email: $email, password: $password)
    }
  `

  let inMemoryToken

  const [logIn, { loading, error }] = useMutation(LOG_IN, {
    onCompleted: data => {
      inMemoryToken = {
        token: data.logIn,
      }
      console.log(data)
      // if (!noRedirect) {
      //   Router.push("/app")
      // }
    },
  })

  return <CredentialsForm action={logIn} form={"login"} />
}

export default LoginForm
