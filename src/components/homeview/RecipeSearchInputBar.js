import React, { useState, useContext } from "react"
import FormTextField from "../forms/FormTextField"
import { Formik, Form } from "formik"
import gql from "graphql-tag"
import { useMutation, useQuery } from "@apollo/react-hooks"
import { globalContext } from "../../context/globalContext"
import Loading from "../Loading"
import FormSelectField from "../forms/FormSelectField"

const MEALS_QUERY = gql`
  query browseRecipes($id: ID!) {
    getUser(id: $id) {
      recipesCreated {
        id
        name
        ingredients {
          name
        }
      }
      recipesSaved {
        id
        name
        ingredients {
          name
        }
      }
    }
  }
`

const ADD_MEAL = gql`
  mutation NewMeal($day: ID!, $recipe: ID!, $label: String!, $cart: ID!) {
    addMeal(day: $day, recipe: $recipe, label: $label, cart: $cart) {
      id
    }
  }
`

const RecipeSearchInputBar = props => {
  const context = useContext(globalContext)
  const { id } = context.state.user
  const { loading, data } = useQuery(MEALS_QUERY, {
    variables: { id: id },
  })
  const [filtered, setFiltered] = useState([])
  const [labelInput, setLabelInput] = useState("brf")

  const [addMeal] = useMutation(ADD_MEAL)

  return (
    <Formik
      initialValues={{
        search: "",
        label: "brf",
      }}
    >
      <Form
        onChange={e => {
          if (e.target.tagName === "INPUT") {
            const { recipesCreated, recipesSaved } = data.getUser

            const matchedRecipesCreated = recipesCreated.filter(r =>
              r.name.toLowerCase().includes(e.target.value.toLowerCase())
            )

            const matchedRecipesSaved = recipesSaved.filter(r =>
              r.name.toLowerCase().includes(e.target.value.toLowerCase())
            )

            const matches = [...matchedRecipesCreated, ...matchedRecipesSaved]
            setFiltered(
              matches
                .flat()
                .filter((item, index) => matches.indexOf(item) === index)
            )
          }
          if (e.target.tagName === "SELECT") {
            setLabelInput(e.target.value)
          }
        }}
      >
        <div style={{ display: "flex" }}>
          <FormTextField name="search" type="search" autoComplete="off" />
          <FormSelectField
            name="label"
            options={["brf", "2ndbrf", "lunch", "dinner", "snack", "supper"]}
          />
        </div>
        {loading ? (
          <Loading />
        ) : (
          <ul style={{ display: "flex", flexDirection: "column" }}>
            {filtered.map((r, i) => {
              return (
                <li key={i}>
                  {r.name}
                  <button
                    className="btn"
                    type="button"
                    onClick={() => {
                      addMeal({
                        variables: {
                          day: props.currentDay.id,
                          recipe: r.id,
                          label: labelInput,
                          cart: context.state.user.cart.id,
                        },
                      })
                      props.refetch()
                    }}
                  >
                    Add +
                  </button>
                </li>
              )
            })}
          </ul>
        )}
      </Form>
    </Formik>
  )
}

export default RecipeSearchInputBar
