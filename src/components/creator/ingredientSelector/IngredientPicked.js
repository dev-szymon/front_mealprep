import React from "react"
import "./IngredientPicked.css"

const IngredientPicked = ({ item }) => {
  return (
    <div className="ingredient-picked">
      <p>{item.name}</p>
      <span>{`${item.quantity} ml`}</span>
    </div>
  )
}

export default IngredientPicked
