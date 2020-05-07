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
            id
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
  const { loading, data, refetch } = useQuery(MEALPLAN_QUERY, {
    variables: { id: id },
  })

  console.log(context.state.user.cart)

  // returns meals from the passed day and a button if they are < than 6
  const displayMeals = day => {
    return (
      <div>
        {day.meals.length < 6 ? (
          <RecipeSearchInputBar
            currentDay={
              data.getUser.mealPlan.days.filter(d => findCurrentDay(d))[0]
            }
            mplan={data.getUser.mealPlan.id}
            refetch={refetch}
          />
        ) : null}
        {day.meals.map((m, i) => (
          <Meal
            key={i}
            data={m}
            refetch={refetch}
            cart={context.state.user.cart.id}
          />
        ))}
      </div>
    )
  }

  // returns current day  object
  const findCurrentDay = day => {
    const currentDay = new Date()
    const passedDay = new Date(day.date)
    const isCurrent = () => {
      if (currentDay.getDay() === passedDay.getDay()) {
        return day
      }
    }
    return isCurrent()
  }

  // !!! Clicking on nav elements triggers onclick handler from header, they are too close to each other
  return (
    <section style={{ padding: "0 20px" }}>
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          <Nav>
            <CurrentDay
              currentDayData={
                data.getUser.mealPlan.days.filter(d => findCurrentDay(d))[0]
              }
            />
          </Nav>
          <div>
            {displayMeals(
              data.getUser.mealPlan.days.filter(d => findCurrentDay(d))[0]
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default Homeview
