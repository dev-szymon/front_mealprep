import React, { useState } from "react"
import "./CredentialsForm.css"
import ActionButton from "../forms/ActionButton"

const CredentialsForm = ({ form, action, buttonText }) => {
  const [values, setValues] = useState()

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <form
      className="credentials-form"
      onSubmit={event => {
        event.preventDefault()
        try {
          action({ variables: values })
        } catch (err) {
          console.log(err)
        }
      }}
    >
      {form === "register" ? (
        <div className="field-group">
          {values?.username?.length > 0 ? null : (
            <label htmlFor="username">nazwa użytkownika</label>
          )}
          <input type="username" name="username" onChange={handleChange} />
        </div>
      ) : null}
      <div className="field-group">
        {values?.email?.length > 0 ? null : (
          <label htmlFor="email">email</label>
        )}
        <input type="email" name="email" onChange={handleChange} />
      </div>
      <div className="field-group">
        {values?.password?.length > 0 ? null : (
          <label htmlFor="password">hasło</label>
        )}
        <input type="password" name="password" onChange={handleChange} />
      </div>
      <ActionButton type="submit" buttonText={buttonText} />
    </form>
  )
}

export default CredentialsForm
