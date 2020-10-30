import React, { useState } from "react"
import { gql } from "apollo-boost"
import { useLazyQuery } from "@apollo/react-hooks"
import "./IngredientSelector.css"
import SearchInput from "./SearchInput"
import IngredientSearchResult from "./IngredientSearchResult"
import IngredientPicked from "./IngredientPicked"

const IngredientSelector = ({ className }) => {
  const [value, setValue] = useState("")
  const [results, setResults] = useState(null)

  const SEARCH_INGREDIENTS_QUERY = gql`
    query getIngredientByName($name: String!) {
      getIngredientByName(name: $name) {
        id
        name
      }
    }
  `
  const [ingredients, setIngredients] = useState([])

  const [getIngredientByName, { data, loading, error }] = useLazyQuery(
    SEARCH_INGREDIENTS_QUERY,
    {
      onCompleted: () => {
        setResults(data.getIngredientByName)
      },
    }
  )

  const handleKeyPress = e => {
    if (e.key === "Enter" && value.length > 2) {
      getIngredientByName({ variables: { name: value } })
    }

    return false
  }

  return (
    <div className={className}>
      {ingredients.map(item => {
        return <IngredientPicked key={`${item.id}selected`} item={item} />
      })}
      <SearchInput
        placeholder="szukaj składnika..."
        onChange={e => {
          setValue(e.target.value)
        }}
        value={value}
        onKeyPress={e => handleKeyPress(e)}
        onClickSearch={() => {
          getIngredientByName({ variables: { name: value } })
        }}
        onClickClear={() => setValue("")}
        loading={loading}
      />
      <div
        style={{
          position: "relative",
          maxHeight: "200px",
          overflowY: "scroll",
        }}
      >
        {error && <div>wystąpił błąd spróbuj ponownie</div>}
        {results?.length === 0 && <div>brak wyników</div>}
        <div style={{ padding: "0 0.4rem" }}>
          {results?.map(i => {
            return (
              <IngredientSearchResult
                key={i.id}
                ingredient={i}
                onClickAdd={() => {
                  const quantityValue = document.getElementById(
                    `${i.id}quantity`
                  ).value
                  const valueObject = { ...i, quantity: quantityValue }
                  setIngredients([...ingredients, valueObject])
                  const mainElement = document.querySelector(".main-element")
                  const currentPosition = mainElement.scrollTop
                  mainElement.scrollTo(0, currentPosition + 3.25 * 16)
                }}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default IngredientSelector
