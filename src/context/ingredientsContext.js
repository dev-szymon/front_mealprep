import React, { createContext, useState } from "react"

export const ingredientsContext = createContext(null)

export const IngredientsContextProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState([])

  return (
    <ingredientsContext.Provider value={[ingredients, setIngredients]}>
      {children}
    </ingredientsContext.Provider>
  )
}
