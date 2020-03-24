import React, { createContext, useReducer } from "react"

export const globalContext = createContext()
const initialState = { user: null, login: userData => {}, logout: () => {} }

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      }
    case "LOGOUT":
      return {
        ...state,
        user: null,
      }
    default:
      return state
  }
}

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const login = async userData => {
    await dispatch({ type: "LOGIN", payload: userData })
  }
  const logout = () =>
    dispatch({
      type: "LOGOUT",
    })

  return (
    <globalContext.Provider value={{ state, dispatch, login, logout }}>
      {children}
    </globalContext.Provider>
  )
}
