import React from "react"
import { IngredientsUsed } from "../../functions/index"
import gql from "graphql-tag"
import { useMutation } from "@apollo/react-hooks"

const REMOVE_MEAL = gql`
  mutation NewMeal($meal: ID!, $cart: ID!) {
    removeMeal(meal: $meal, cart: $cart) {
      id
      recipe {
        name
      }
    }
  }
`

const Meal = ({ data, refetch, cart }) => {
  const { ingredients, name } = data.recipe
  const sumIngredientsKcal = () => {
    let kcalArray = []
    ingredients.map(i => kcalArray.push(i.kcal))
    const totalKcal = kcalArray.reduce((a, b) => {
      return a + b
    }, 0)
    return totalKcal
  }

  const [removeMeal] = useMutation(REMOVE_MEAL)

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
      <button
        className="btn"
        type="button"
        onClick={() => {
          removeMeal({
            variables: {
              meal: data.id,
              cart: cart,
            },
          })
          refetch()
        }}
      >
        remove
      </button>
    </div>
  )
}

export default Meal
