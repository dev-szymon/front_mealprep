import React, { createContext, useReducer } from "react"

export const mealplanContext = createContext({})

const reducer = (state, action) => {
  switch (action.type) {
    case "mealplanQuery":
      return {
        state: action.payload,
      }
    default:
      return state
  }
}

export const MealplanContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {})

  const fillMealplan = async data => {
    await dispatch({ type: "mealplanQuery", payload: data })
  }

  return (
    <mealplanContext.Provider value={{ state, dispatch, fillMealplan }}>
      {children}
    </mealplanContext.Provider>
  )
}
