import React, { useState } from "react"

const IngredientSelector = () => {
  const [value, setValue] = useState("")
  return (
    <div>
      <input onChange={e => setValue(e.target.value)}></input>
      <div></div>
    </div>
  )
}
export default IngredientSelector
