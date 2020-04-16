import React from "react"
import { IngredientsUsed } from "../../functions/index"

const Recipe = ({ data }) => {
  const {
    name,
    ingredients,
    createdBy,
    // public,  ?? do I need it here?
    description,
    prepTime,
    cookBooked,
    likes,
  } = data

  return (
    <div>
      <h3>{name}</h3>
      <div>ingredients: {<IngredientsUsed ingredients={ingredients} />}</div>
      <p>{description}</p>
      <h5>preparation time: {prepTime}min</h5>
      <h4>author: {createdBy.username}</h4>
      <h4>likes: {likes.length}</h4>
      <h4>cookbooked: {cookBooked.length}</h4>
    </div>
  )
}

export default Recipe
