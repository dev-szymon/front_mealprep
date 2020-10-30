import React from "react"
import { Field, ErrorMessage } from "formik"
import ErrorText from "./ErrorText"

const TextInput = ({ className, label, name, ...rest }) => {
  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest}></Field>
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  )
}

export default TextInput
