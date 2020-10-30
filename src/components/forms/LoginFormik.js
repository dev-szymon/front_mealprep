import React from "react"
import TextInput from "./TextInput"
import FormikContainer from "./FormikContainer"
import { gql } from "apollo-boost"
import { useMutation } from "@apollo/react-hooks"
import ActionButton from "./ActionButton"
import { navigate } from "gatsby"
import * as Yup from "yup"

const LoginFormik = () => {
  const LOG_IN = gql`
    mutation logIn($email: String!, $password: String!) {
      logIn(email: $email, password: $password)
    }
  `

  const [logIn] = useMutation(LOG_IN, {
    onCompleted: data => {
      console.log(data)
      navigate("/")
    },
  })

  const initialValues = { email: "", password: "" }
  const validationSchema = Yup.object({
    email: Yup.string().required("wprowadź email"),
    password: Yup.string().required("musisz określić swoje hasło"),
  })
  return (
    <FormikContainer
      className="login-formik"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => {
        console.log(values)
        try {
          logIn({ variables: values })
        } catch (err) {
          console.log(err)
        }
      }}
    >
      <TextInput label="email" name="email" type="email" />
      <TextInput label="hasło" name="password" type="password" />
      <ActionButton type="submit" buttonText="zaloguj się" />
    </FormikContainer>
  )
}

export default LoginFormik
