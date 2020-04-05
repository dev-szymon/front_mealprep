import React from "react"

const CurrentDay = ({ meals }) => {
  const currentDay = () => {
    const date = new Date()
    const day = date.getDay()
    switch (day) {
      case 1:
        return `monday`
      case 2:
        return `tuesday`
      case 3:
        return `wednesday`
      case 4:
        return `thursday`
      case 5:
        return `friday`
      case 6:
        return `saturday`
      case 7:
        return `sunday`
      default:
        return `Today's plan`
    }
  }
  const sumDailyKcal = () => {
    let kcalArray = []
    meals.map(d => d.recipe.ingredients.map(i => kcalArray.push(i.kcal)))
    const totalKcal = kcalArray.reduce((a, b) => {
      return a + b
    }, 0)
    return totalKcal
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h3>{currentDay()}</h3>
      <p>kcal: {sumDailyKcal()}</p>
    </div>
  )
}

export default CurrentDay
