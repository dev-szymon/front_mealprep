import React from "react"
import { useField } from "formik"

const FormTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div>
      <legend htmlFor={props.id || props.name}> {label}</legend>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error-msg">{meta.error}</div>
      ) : null}
    </div>
  )
}

export default FormTextField
