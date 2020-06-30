import React, { useState } from "react"

const CredentialsForm = ({ form, action }) => {
  const [values, setValues] = useState()

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
    console.log(values)
  }

  return (
    <form
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
          <label htmlFor="username">nazwa użytkownika</label>
          <input type="username" name="username" onChange={handleChange} />
        </div>
      ) : null}
      <div>
        <label htmlFor="email">email</label>
        <input type="email" name="email" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">hasło</label>
        <input type="password" name="password" onChange={handleChange} />
      </div>
      <button type="submit">
        {form === "register" ? "Zarejestruj się" : "Zaloguj"}
      </button>
    </form>
  )
}

export default CredentialsForm
