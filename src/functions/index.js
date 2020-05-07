import React from "react"

export const IngredientsUsed = ({ ingredients }) => {
  return ingredients.map(i => (
    <span style={{ padding: "0 5px" }} key={`${i.id}${i.name}`}>
      {i.name}
    </span>
  ))
}
