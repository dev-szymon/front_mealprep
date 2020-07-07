import React, { useState } from "react"
import { gql } from "apollo-boost"
import { useMutation } from "@apollo/react-hooks"
import { useDropzone } from "react-dropzone"
import "./IngredientCreator.css"
import InputField from "./InputField"

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

  const NEW_RECIPE = gql`
    mutation newIngredient($recipe: recipeInput!) {
      newRecipe(recipe: $recipe) {
        id
      }
    }
  `
  // need to provide token via 3rd party

  const [newRecipe, { loading, error }] = useMutation(NEW_RECIPE, {
    onCompleted: data => console.log(data),
    context: {
      headers: {
        authorization: "",
      },
    },
  })

  return (
    <form
      className="input-form"
      onSubmit={event => {
        event.preventDefault()
        try {
          console.log(values)
          let imagesUploaded = []

          // body must be in formdata format not in json

          values.images.map(async im => {
            const data = new FormData()
            data.append("file", im)
            data.append("upload_preset", process.env.GATSBY_UPLOAD_PRESET)
            const res = await fetch(
              `https://api.cloudinary.com/v1_1/${process.env.GATSBY_CLOUD_NAME}/image/upload`,
              {
                method: "POST",
                body: data,
              }
            )
            const file = await res.json()
            return imagesUploaded.push(file.secure_url)
          })

          return newRecipe({
            variables: {
              recipe: { ...values, images: imagesUploaded },
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
        text="nazwa przepisu"
        name="name"
        onChange={handleChange}
      />
      <div className="img-input-container">
        <div className="img-input" {...getRootProps()}>
          {values.images[0] ? (
            <img
              src={URL.createObjectURL(values.images[0])}
              alt="image upload preview"
            ></img>
          ) : (
            <h1>+</h1>
          )}
          <input type="file" {...getInputProps()} multiple={true} />
        </div>
        <div className="img-input" {...getRootProps()}>
          {values.images[0] ? (
            <img
              src={URL.createObjectURL(values.images[1])}
              alt="image upload preview"
            ></img>
          ) : (
            <h1>+</h1>
          )}
          <input type="file" {...getInputProps()} multiple={true} />
        </div>
        <div className="img-input" {...getRootProps()}>
          {values.images[0] ? (
            <img
              src={URL.createObjectURL(values.images[2])}
              alt="image upload preview"
            ></img>
          ) : (
            <h1>+</h1>
          )}
          <input type="file" {...getInputProps()} multiple={true} />
        </div>
      </div>
      <InputField
        type="checkbox"
        inputFor="public"
        text="publiczny"
        onChange={handleChange}
      />
      <InputField
        type="textarea"
        inputFor="description"
        text="przygotowanie"
        onChange={handleChange}
      />

      <button type="submit">Stwórz</button>
    </form>
  )
}

export default IngredientCreator
