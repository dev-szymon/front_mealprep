import React, { useContext } from "react"
import { Formik, Form } from "formik"
import gql from "graphql-tag"
import { useMutation } from "@apollo/react-hooks"
import { globalContext } from "../../context/globalContext"
import FormTextField from "./FormTextField"
import * as Yup from "yup"

const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    logIn(email: $email, password: $password) {
      id
      username
      cart {
        id
        owner {
          username
        }
        products {
          id
        }
      }
    }
  }
`
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Too short!")
    .max(70, "Password too long!")
    .required("Password is required"),
})

const LoginFormik = () => {
  const context = useContext(globalContext)
  const [logIn] = useMutation(LOGIN_USER, {
    update(_, { data }) {
      context.login(data.logIn)
    },
  })
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true)
        logIn({
          variables: {
            email: values.email,
            password: values.password,
          },
        })
        setSubmitting(false)
      }}
    >
      <Form>
        <FormTextField label="email" name="email" type="email" />
        <FormTextField label="password" name="password" type="password" />
        <div>
          <button className="btn" type="submit">
            Login
          </button>
        </div>
      </Form>
    </Formik>
  )
}

export default LoginFormik
