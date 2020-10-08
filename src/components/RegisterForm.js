import React from "react"
import { gql } from "apollo-boost"
import { useMutation } from "@apollo/react-hooks"
import CredentialsForm from "./CredentialsForm"

const LoginForm = () => {
  const NEW_USER = gql`
    mutation newUser($username: String!, $email: String!, $password: String!) {
      newUser(username: $username, email: $email, password: $password)
    }
  `
  const [newUser] = useMutation(NEW_USER, {
    onCompleted: data => {
      console.log(data)
    },
  })

  return (
    <CredentialsForm
      action={newUser}
      form={"register"}
      buttonText="załóż konto"
    />
  )
}

export default LoginForm
