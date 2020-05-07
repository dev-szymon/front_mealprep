import React, { useContext } from "react"
import { ingredientsContext } from "../../context/ingredientsContext"
import gql from "graphql-tag"
import { useMutation } from "@apollo/react-hooks"
import FormTextField from "../forms/FormTextField"
import { Formik, Form, FieldArray } from "formik"
import { globalContext } from "../../context/globalContext"
import IngredientsSearchInputBar from "./IngredientsSearchInputBar"

// abstract search and list/add button

const CREATE_RECIPE = gql`
  mutation newRecipe($recipe: createNewRecipe) {
    newRecipe(recipe: $recipe) {
      id
      name
    }
  }
`

const RecipeCreator = ({ refetch }) => {
  const context = useContext(globalContext)
  const [newRecipe] = useMutation(CREATE_RECIPE, {
    // once mutation is succesfull refetches from props (refetch recipes of the user)
    onCompleted() {
      refetch()
    },
  })
  const [ingredients] = useContext(ingredientsContext)
  const { user } = context.state
  return (
    <Formik
      initialValues={{
        title: "",
        public: true,
        category: "",
        ingredients: [],
        description: "",
        prepTime: "",
      }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true)
        const ingredientsArray = []
        values.ingredients.map(ing => ingredientsArray.push(ing.id))
        await newRecipe({
          variables: {
            recipe: {
              name: values.title,
              createdBy: user.id,
              public: true,
              category: values.category,
              ingredients: ingredientsArray,
              description: values.description,
              prepTime: values.prepTime,
            },
          },
        })
        setSubmitting(false)
      }}
    >
      {({ values }) => (
        <Form>
          <FormTextField label="recipe name" name="title" type="text" />
          <FormTextField label="categories" name="category" type="search" />
          <FieldArray name="ingredients">
            {arrayHelpers => (
              <div>
                <IngredientsSearchInputBar
                  name={`ingredients`}
                  arrayHelpers={arrayHelpers}
                />
                <div style={{ display: "flex" }}>
                  {values.ingredients.map(i => (
                    <div style={{ display: "flex" }}>
                      <p>{i.name}</p>
                      <button
                        type="button"
                        onClick={() => {
                          const index = ingredients.indexOf(i)
                          ingredients.splice(index, 1)
                        }}
                      >
                        -
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </FieldArray>
          <FormTextField
            label="description"
            name="description"
            type="textfield"
          />
          <FormTextField
            label="preparation time"
            name="prepTime"
            type="number"
          />
          <p>public</p>
          <button className="btn" type="submit">
            Create recipe!
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default RecipeCreator
