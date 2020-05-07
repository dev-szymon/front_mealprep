import React from "react"
import { useField } from "formik"

const FormSelectField = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  const options = [...props.options]

  return (
    <div>
      <legend htmlFor={props.id || props.name}> {label}</legend>
      <select {...field} {...props}>
        {options.map(o => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {/* {meta.touched && meta.error ? (
        <div className="error-msg">{meta.error}</div>
      ) : null} */}
    </div>
  )
}

export default FormSelectField
