import React, { useContext } from "react"
import "./Form.css"
import gql from "graphql-tag"
import { useMutation } from "@apollo/react-hooks"
import { globalContext } from "../../context/globalContext"

const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    logIn(email: $email, password: $password) {
      id
      name
      recipesCreated {
        id
        name
      }
      followers {
        id
        name
      }
      following {
        id
        name
      }
    }
  }
`

const LoginForm = () => {
  const context = useContext(globalContext)
  let email = ""
  let password = ""

  const [logIn] = useMutation(LOGIN_USER, {
    update(_, { data }) {
      context.login(data.logIn)
    },
  })
  return (
    <>
      <form
        onSubmit={async e => {
          e.preventDefault()
          await logIn({
            variables: {
              email: email.value,
              password: password.value,
            },
          })
        }}
      >
        <fieldset id="sign_up">
          <legend>Provide your email and password!</legend>
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
          <input className="btn" type="submit" value="Login" />
        </div>
      </form>
    </>
  )
}

export default LoginForm
