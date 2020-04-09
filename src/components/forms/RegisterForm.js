import React, { useContext } from "react"
import "./Form.css"
import gql from "graphql-tag"
import { useMutation } from "@apollo/react-hooks"
import { globalContext } from "../../context/globalContext"

// need to query more to popuate state
const NEW_USER = gql`
  mutation RegisterUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    newUser(username: $username, email: $email, password: $password) {
      id
      username
    }
  }
`

const RegisterForm = () => {
  const context = useContext(globalContext)
  let username = ""
  let email = ""
  let password = ""

  const [newUser] = useMutation(NEW_USER, {
    update(_, { data }) {
      context.login(data.id)
    },
  })
  return (
    <>
      <form
        onSubmit={async e => {
          e.preventDefault()
          await newUser({
            variables: {
              username: username.value,
              email: email.value,
              password: password.value,
            },
          })
        }}
      >
        <fieldset id="sign_up">
          <legend>Create your new personalised account!</legend>
          <div>
            <label htmlFor="username">Username</label>
            <input
              ref={node => {
                username = node
              }}
              type="name"
              username="username"
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
            />
          </div>
        </fieldset>
        <div>
          <input className="btn" type="submit" value="Register" />
        </div>
      </form>
    </>
  )
}

export default RegisterForm
