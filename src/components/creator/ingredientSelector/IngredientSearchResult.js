import React from "react"
import "./IngredientSearchResult.css"

const IngredientSearchResult = ({ ingredient, onClickAdd }) => {
  return (
    <div className="ingredient-search-result">
      <h2 className="ingredient-name">{ingredient.name}</h2>
      <div className="add-ingredient">
        <input
          id={`${ingredient.id}quantity`}
          name={`${ingredient.id}-quantity`}
          type="number"
          defaultValue={ingredient.defaultValue || 1}
        />
        <div className="add-ingredient-button">
          <span onClick={onClickAdd}>+</span>
        </div>
      </div>
    </div>
  )
}

export default IngredientSearchResult
