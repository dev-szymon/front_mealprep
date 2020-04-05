import React from "react"
import { IngredientsUsed } from "../../functions/index"

const Meal = ({ data }) => {
  const { ingredients, name } = data.recipe
  const sumIngredientsKcal = () => {
    let kcalArray = []
    ingredients.map(i => kcalArray.push(i.kcal))
    const totalKcal = kcalArray.reduce((a, b) => {
      return a + b
    }, 0)
    return totalKcal
  }

  return (
    <div>
      <div>
        <h5>{data.label}</h5>
        <h5>kcal {sumIngredientsKcal()}</h5>
      </div>
      <div>
        <h4>{name}</h4>
        <div>
          <IngredientsUsed ingredients={ingredients} />
        </div>
      </div>
      <button type="button">remove</button>
    </div>
  )
}

export default Meal
