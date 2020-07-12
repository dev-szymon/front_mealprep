import React, { useState } from "react"
import "./CredentialsForm.css"

const CredentialsForm = ({ form, action }) => {
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
        <div>
          {values?.username?.length > 0 ? null : (
            <label htmlFor="username">nazwa użytkownika</label>
          )}
          <input type="username" name="username" onChange={handleChange} />
        </div>
      ) : null}
      <div>
        {values?.email?.length > 0 ? null : (
          <label htmlFor="email">email</label>
        )}
        <input type="email" name="email" onChange={handleChange} />
      </div>
      <div>
        {values?.password?.length > 0 ? null : (
          <label htmlFor="password">hasło</label>
        )}
        <input type="password" name="password" onChange={handleChange} />
      </div>
      <div className="credentials-form__buttons">
        <button id="submit-button" type="submit">
          {form === "register" ? "Zarejestruj się" : "Zaloguj"}
          <div></div>
        </button>
        <button type="button">Więcej</button>
      </div>
    </form>
  )
}

export default CredentialsForm
