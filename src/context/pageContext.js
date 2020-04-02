import React, { createContext, useReducer } from "react"

const initialPage = {
  page: "register",
  goToLogin: () => {},
  goToRegister: () => {},
}
export const pageContext = createContext(initialPage)

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        page: "login",
      }
    case "REGISTER":
      return {
        ...state,
        page: "register",
      }
    default:
      return state
  }
}

export const PageContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialPage)

  const goToLogin = () => dispatch({ type: "LOGIN" })

  const goToRegister = () => dispatch({ type: "REGISTER" })

  return (
    <pageContext.Provider value={{ state, dispatch, goToLogin, goToRegister }}>
      {children}
    </pageContext.Provider>
  )
}
