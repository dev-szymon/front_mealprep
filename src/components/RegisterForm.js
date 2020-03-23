import React from "react"
import "./RegisterForm.css"
import gql from "graphql-tag"
import { useMutation } from "@apollo/react-hooks"

const NEW_USER = gql`
  mutation RegisterForm($name: String!, $email: String!, $password: String!) {
    newUser(name: $name, email: $email, password: $password) {
      id
      name
    }
  }
`

const RegisterForm = () => {
  let name
  let email
  let password

  const [newUser, { data }] = useMutation(NEW_USER)
  return (
    <>
      <form
        style={{ margin: "70px 20px" }}
        onSubmit={async e => {
          e.preventDefault()
          name = ""
          email = ""
          password = ""
          await newUser({
            variables: {
              name: name,
              email: email,
              password: password,
            },
          })
        }}
      >
        <fieldset id="sign_up">
          <legend>Create your new personalised account!</legend>
          <div>
            <label htmlFor="name">Name</label>
            <input
              ref={node => {
                name = node
              }}
              type="name"
              name="name"
              id="name"
            />
          </div>
          <div>
            <label htmlFor="email-address">Email</label>
            <input
              ref={node => {
                email = node
              }}
              type="email"
              name="email-address"
              id="email-address"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              ref={node => {
                password = node
              }}
              type="password"
              name="password"
              id="password"
            />
          </div>
        </fieldset>
        <div>
          <input className="btn" type="submit" value="Register..." />
        </div>
      </form>
    </>
  )
}

export default RegisterForm
