import React from "react"
import "./DayPanel.css"

const DayPanel = () => {
  const currentDay = () => {
    const date = new Date()
    // const optionalZero = () => (date.getMonth() <= 10) ? "0"
    const day = date.getDay()
    switch (day) {
      case 1:
        return `poniedziałek`
        break
      case 2:
        return `wtorek`
        break
      case 3:
        return `środa`
        break
      case 4:
        return `czwartek`
        break
      case 5:
        return `piątek`
        break
      case 6:
        return `sobota`
        break
      case 7:
        return `niedziela`
        break
    }
  }
  return (
    <>
      <div>
        <h3>{currentDay()}</h3>
      </div>
    </>
  )
}

export default DayPanel
