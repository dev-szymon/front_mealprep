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
  const [newUser, { loading, error }] = useMutation(NEW_USER, {
    onCompleted: data => localStorage.setItem("token", data.newUser),
  })

  return <CredentialsForm action={newUser} form={"register"} />
}

export default LoginForm
