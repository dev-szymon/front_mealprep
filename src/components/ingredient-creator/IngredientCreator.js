import React, { useState } from "react"
import { gql } from "apollo-boost"
import { useMutation } from "@apollo/react-hooks"
import { useDropzone } from "react-dropzone"
import "./IngredientCreator.css"

const IngredientCreator = () => {
  const [values, setValues] = useState({ images: [], tips: [] })
  const onDrop = acceptedFiles => {
    const uploads = [values.images, acceptedFiles].flat()
    if (uploads.length > 3) {
      console.log("too many files")
      uploads.splice(2, uploads.length - 3)
      return setValues({
        ...values,
        images: uploads,
      })
    }

    return setValues({ ...values, images: uploads })
  }
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
  // need to provide token via 3rd party

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
            console.log(values)
          } catch (err) {
            console.log(err)
          }
        }}
      >
        <div>
          <label htmlFor="name">nazwa produktu</label>
          <input type="name" name="name" onChange={handleChange} />
        </div>
        <div className="img-input-container">
          <div className="img-input" {...getRootProps()}>
            {values.images[0] ? (
              <img
                src={URL.createObjectURL(values.images[0])}
                alt="first upload image"
              ></img>
            ) : (
              <h1>+</h1>
            )}
            <input type="file" {...getInputProps()} />
          </div>
          <div className="img-input" {...getRootProps()}>
            {values.images[1] ? (
              <img
                src={URL.createObjectURL(values.images[1])}
                alt="first upload image"
              ></img>
            ) : (
              <h1>+</h1>
            )}
            <input type="file" {...getInputProps()} />
          </div>
          <div className="img-input" {...getRootProps()}>
            {values.images[2] ? (
              <img
                src={URL.createObjectURL(values.images[2])}
                alt="first upload image"
              ></img>
            ) : (
              <h1>+</h1>
            )}
            <input type="file" {...getInputProps()} />
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
