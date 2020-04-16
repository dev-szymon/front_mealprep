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
  mutation NewMeal($week: ID!, $day: ID!, $label: String!) {
    addMeal(week: $week, day: $day, label: $label) {
      id
      recipe {
        name
      }
    }
  }
`

const RecipeSearchInputBar = () => {
  const context = useContext(globalContext)
  const { id } = context.state.user
  const { loading, data } = useQuery(MEALS_QUERY, {
    variables: { id: id },
  })
  const [filtered, setFiltered] = useState([])

  return (
    <Formik
      initialValues={{
        search: "",
      }}
    >
      <Form
        onChange={e => {
          const matched = data.getUser.recipesCreated.filter(r =>
            r.name.toLowerCase().includes(e.target.value.toLowerCase())
          )
          setFiltered([...matched])
          console.log(filtered)
        }}
      >
        <FormTextField name="search" type="search" />

        {loading ? (
          <Loading />
        ) : (
          <ul style={{ display: "flex", flexDirection: "column" }}>
            {filtered.map((r, i) => {
              return (
                <li key={i}>
                  {r.name}
                  <button type="submit">Add +</button>
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
