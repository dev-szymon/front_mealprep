import React, { useState } from "react"
import FormTextField from "../forms/FormTextField"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import Loading from "../Loading"

const INGREDIENTS_QUERY = gql`
  query browseIngredients {
    getIngredients {
      id
      name
      kcal
      carbs
      protein
      fats
    }
  }
`

const IngredientsSearchInputBar = ({ arrayHelpers }) => {
  const { loading, data } = useQuery(INGREDIENTS_QUERY)
  const [filtered, setFiltered] = useState([])

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <FormTextField
            label="ingredients"
            name="search"
            type="search"
            autoComplete="off"
            onChange={e => {
              const { getIngredients } = data
              if (e.target.value !== "") {
                const matched = getIngredients.filter(i =>
                  i.name.toLowerCase().includes(e.target.value.toLowerCase())
                )
                setFiltered(matched)
              }
            }}
          />
          <ul style={{ display: "flex", flexDirection: "column" }}>
            {filtered.map((ingredient, i) => {
              return (
                <li key={i}>
                  {ingredient.name}
                  <button
                    className="btn"
                    type="button"
                    onClick={() => arrayHelpers.insert(i, ingredient)}
                  >
                    +
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default IngredientsSearchInputBar
