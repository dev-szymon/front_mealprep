import React, { useContext } from "react"
import { globalContext } from "../../context/globalContext"
import Meal from "../../components/homeview/Meal"
import Nav from "../../components/layout/Nav"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import CurrentDay from "../../components/homeview/CurrentDay"
import Loading from "../Loading"
import RecipeSearchInputBar from "./RecipeSearchInputBar"

const MEALPLAN_QUERY = gql`
  query getMealPlan($id: ID!) {
    getUser(id: $id) {
      username
      mealPlan {
        id
        days {
          id
          meals {
            recipe {
              id
              name
              ingredients {
                name
                kcal
              }
            }
            label
          }
          date
        }
      }
    }
  }
`

const Homeview = () => {
  const context = useContext(globalContext)

  const { id } = context.state.user
  const { loading, data } = useQuery(MEALPLAN_QUERY, {
    variables: { id: id },
  })

  // returns meals from the passed day and a button if they are < than 6
  const displayMeals = (day, index) => {
    return (
      <div key={index}>
        {day.meals.length < 6 ? <RecipeSearchInputBar /> : null}
        {day.meals.map((m, i) => (
          <Meal key={i} data={m} />
        ))}
      </div>
    )
  }

  // compares today's day of the week with all the days of current week and returns displayMeals function
  const findCurrentDay = day => {
    const currentDay = new Date()
    const passedDay = new Date(day.date)
    const isCurrent =
      currentDay.getDay() === passedDay.getDay() ? displayMeals(day) : null
    return isCurrent
  }

  // !!! Clicking on nav elements triggers onclick handler from header, they are too close to each other
  return (
    <section style={{ padding: "0 20px" }}>
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          <Nav>
            <CurrentDay mealPlan={data.getUser.mealPlan} />
          </Nav>
          <div>{data.getUser.mealPlan.days.map(d => findCurrentDay(d))}</div>
        </div>
      )}
    </section>
  )
}

export default Homeview
