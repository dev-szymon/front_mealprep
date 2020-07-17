import React, { useState } from "react"
import { gql } from "apollo-boost"
import { useMutation } from "@apollo/react-hooks"
import { useDropzone } from "react-dropzone"
import "./IngredientCreator.css"
import InputField from "./InputField"
import { getAccessToken } from "../../auth"

const IngredientCreator = () => {
  const [values, setValues] = useState({ images: [], tips: [] })

  const onDrop = acceptedFiles => {
    return setValues({ ...values, images: acceptedFiles })
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

  const [newIngredient] = useMutation(NEW_INGREDIENT, {
    onCompleted: data => console.log(data),
    context: {
      headers: {
        authorization: getAccessToken(),
      },
    },
  })

  return (
    <form
      className="input-form"
      onSubmit={async event => {
        event.preventDefault()
        try {
          console.log(values)

          // body must be in formdata format not in json
          const data = new FormData()
          data.append("file", values.images[0])
          data.append("upload_preset", process.env.GATSBY_UPLOAD_PRESET)
          const res = await fetch(
            `https://api.cloudinary.com/v1_1/${process.env.GATSBY_CLOUD_NAME}/image/upload`,
            {
              method: "POST",
              body: data,
            }
          )
          const file = await res.json()
          return newIngredient({
            variables: {
              ingredient: { ...values, images: [file.secure_url] },
            },
          })
        } catch (err) {
          console.log(err)
        }
      }}
    >
      <InputField
        type="text"
        inputFor="name"
        text="nazwa produktu"
        name="name"
        onChange={handleChange}
      />
      <div className="img-input-container">
        <div className="img-input" {...getRootProps()}>
          {values.images[0] ? (
            <img
              src={URL.createObjectURL(values.images[0])}
              alt="upload preview"
            ></img>
          ) : (
            <h1>+</h1>
          )}
          <input type="file" {...getInputProps()} multiple={false} />
        </div>
      </div>
      <InputField
        type="number"
        inputFor="kcal"
        text="kcal"
        onChange={handleChange}
      />
      <InputField
        type="number"
        inputFor="protein"
        text="białko"
        onChange={handleChange}
      />
      <InputField
        type="number"
        inputFor="fats"
        text="tłuszcze"
        onChange={handleChange}
      />
      <InputField
        type="number"
        inputFor="carbs"
        text="węglowodany"
        onChange={handleChange}
      />
      <InputField
        type="number"
        inputFor="glycemicIndex"
        text="indeks glikemiczny"
        onChange={handleChange}
      />

      <button type="submit">Stwórz</button>
    </form>
  )
}

export default IngredientCreator
