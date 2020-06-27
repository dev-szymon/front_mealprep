import React, { useState } from "react"
import { gql } from "apollo-boost"
import { useMutation } from "@apollo/react-hooks"

const CredentialsForm = ({ form }) => {
  const [values, setValues] = useState()

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
    console.log(values)
  }
  const NEW_USER = gql`
    mutation newUser($username: String!, $email: String!, $password: String!) {
      newUser(username: $username, email: $email, password: $password)
    }
  `

  const [newUser, { loading, error }] = useMutation(NEW_USER, {
    onCompleted: data => console.log(data),
  })

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        try {
          newUser({
            variables: values,
          })
          console.log({ variables: values })
        } catch (err) {
          console.log(err)
        }
      }}
    >
      {form === "register" ? (
        <div>
          <label htmlFor="email">nazwa użytkownika</label>
          <input type="username" name="username" onChange={handleChange} />
        </div>
      ) : null}
      <div>
        <label htmlFor="email">email</label>
        <input type="email" name="email" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">hasło</label>
        <input type="password" name="password" onChange={handleChange} />
      </div>
      <button type="submit">Zaloguj</button>
    </form>
  )
}

export default CredentialsForm
