import React from "react"
import "./RecipeCard.css"
import { Link } from "gatsby"

const RecipeCard = ({ recipe }) => {
  return (
    <article className="recipe-card">
      <div className="recipe-card__top">
        <h3>{`@${recipe.createdBy.username}`}</h3>
        <div className="recipe-card__menu">
          <span className="menu-dot"></span>
          <span className="menu-dot"></span>
        </div>
      </div>
      <Link to={`/app/recipes/${recipe.id}`}>
        <h2 className="recipe-card__title">{recipe.name}</h2>
        <div className="img-placeholder"></div>
      </Link>
      <div className="recipe-card__bottom">
        <span>{`${recipe.kcal}kcal`}</span>
        <div className="reach-icons">
          <div>
            ll<span>{recipe.likesNumber}</span>
          </div>
          <div>
            cc<span>{recipe.cookbookedNumber}</span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default RecipeCard
