import React, { useContext } from "react"
import { globalContext } from "../../context/globalContext"
import Meal from "../../components/homeview/Meal"
import Nav from "../../components/layout/Nav"
import CurrentDay from "../../components/homeview/CurrentDay"

const Homeview = () => {
  const context = useContext(globalContext)
  const { user } = context.state
  const { mon } = user.mealPlan

  const addMealButton = () => {
    if (mon.length < 6) {
      return <button type="button">addMeal</button>
    }
  }
  // Clicking on nav elements triggers onclick handler from header, they are too close to each other
  return (
    <section style={{ padding: "0 20px" }}>
      <Nav>
        <CurrentDay meals={mon} />
      </Nav>
      <div>
        {mon.map(m => (
          <Meal key={m.id} data={m} />
        ))}
        {addMealButton()}
      </div>
    </section>
  )
}

export default Homeview
