import React, { useState, useRef, useCallback } from "react"
import { gql } from "apollo-boost"
import { useMutation } from "@apollo/react-hooks"
import { useDropzone } from "react-dropzone"
import "./IngredientCreator.css"

const IngredientCreator = () => {
  const [values, setValues] = useState()
  const imgField = useRef()
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
  })
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  const parseNumbers = (name, value, exceptionsArray) =>
    exceptionsArray.includes(name) ? value : parseFloat(value)

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: parseNumbers(event.target.name, event.target.value, [
        "name",
        "images",
        "tips",
      ]),
      tips: [],
    })
  }

  const NEW_INGREDIENT = gql`
    mutation newIngredient($ingredient: ingredientInput!) {
      newIngredient(ingredient: $ingredient) {
        id
      }
    }
  `

  // context provides token from localStorage because gatsby config only provides that on build

  const [newIngredient, { loading, error }] = useMutation(NEW_INGREDIENT, {
    onCompleted: data => console.log(data),
    context: {
      headers: {
        authorization: "",
      },
    },
  })

  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault()
          try {
            values.images
              ? newIngredient({ variables: { ingredient: values } })
              : newIngredient({
                  variables: { ingredient: { ...values, images: [] } },
                })
          } catch (err) {
            console.log(err)
          }
        }}
      >
        <div>
          <label htmlFor="name">nazwa produktu</label>
          <input type="name" name="name" onChange={handleChange} />
        </div>
        {/* <fieldset
          name="images"
          ref={imgField}
          {...getInputProps()}
          onChange={e => {
            setValues({
              ...values,
              images: Array.from(imgField.current.elements)
                .map(e => Array.from(e.files))
                .flat(),
            })
          }}
        > */}
        <div className="img-input-container">
          <div className="img-input" {...getRootProps()}>
            <input type="file" {...getInputProps()} />
            <h1>+</h1>
          </div>
          <div className="img-input" {...getRootProps()}>
            <input type="file" {...getInputProps()} />
            <h1>+</h1>
          </div>
          <div className="img-input" {...getRootProps()}>
            <input type="file" {...getInputProps()} />
            <h1>+</h1>
          </div>
        </div>

        <div>
          <label htmlFor="kcal">kcal</label>
          <input type="number" name="kcal" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="protein">białko</label>
          <input type="number" name="protein" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="fats">tłuszcze</label>
          <input type="number" name="fats" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="carbs">węglowodany</label>
          <input type="number" name="carbs" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="glycemicIndex">indeks glikemiczny</label>
          <input type="number" name="glycemicIndex" onChange={handleChange} />
        </div>
        <button type="submit">Stwórz</button>
      </form>
    </div>
  )
}

export default IngredientCreator
