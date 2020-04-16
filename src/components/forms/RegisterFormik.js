import React, { useContext } from "react"
import { Formik, Form } from "formik"
import gql from "graphql-tag"
import { useMutation } from "@apollo/react-hooks"
import { globalContext } from "../../context/globalContext"
import FormTextField from "./FormTextField"
import * as Yup from "yup"

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

const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(70, "Too Long!")
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Too short!")
    .max(70, "Password too long!")
    .required("Password is required"),
})

const RegisterFormik = () => {
  const context = useContext(globalContext)
  const [newUser] = useMutation(NEW_USER, {
    update(_, { data }) {
      context.login(data.newUser)
    },
  })

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
      }}
      validationSchema={RegisterSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true)
        newUser({
          variables: {
            username: values.username,
            email: values.email,
            password: values.password,
          },
        })
        setSubmitting(false)
      }}
    >
      <Form>
        <FormTextField label="username" name="username" type="username" />
        <FormTextField label="email" name="email" type="email" />
        <FormTextField label="password" name="password" type="password" />
        <div>
          <button className="btn" type="submit">
            Register
          </button>
        </div>
      </Form>
    </Formik>
  )
}

export default RegisterFormik
