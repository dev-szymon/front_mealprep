import React, { useState, useContext } from "react"
import FormTextField from "../forms/FormTextField"
import { Formik, Form } from "formik"
import gql from "graphql-tag"
import { useMutation, useQuery } from "@apollo/react-hooks"
import { globalContext } from "../../context/globalContext"
import Loading from "../Loading"

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
  mutation NewMeal($day: ID!, $recipe: ID!, $label: String!) {
    addMeal(day: $day, recipe: $recipe, label: $label) {
      id
      recipe {
        name
      }
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

  const [addMeal] = useMutation(ADD_MEAL)

  return (
    <Formik
      initialValues={{
        search: "",
      }}
    >
      <Form
        onChange={e => {
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
        }}
      >
        <FormTextField name="search" type="search" autoComplete="off" />

        {loading ? (
          <Loading />
        ) : (
          <ul style={{ display: "flex", flexDirection: "column" }}>
            {filtered.map((r, i) => {
              return (
                <li key={i}>
                  {r.name}
                  <button
                    type="button"
                    onClick={() => {
                      addMeal({
                        variables: {
                          day: props.currentDay,
                          recipe: r.id,
                          label: "brf",
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
