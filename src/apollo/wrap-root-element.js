import React from "react"
import { ApolloProvider } from "react-apollo"
import { client } from "./client"
import { GlobalContextProvider } from "../context/globalContext"
import { IngredientsContextProvider } from "../context/ingredientsContext"
// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config()
// }

export const wrapRootElement = ({ element }) => (
  <GlobalContextProvider>
    <IngredientsContextProvider>
      <ApolloProvider client={client}>{element}</ApolloProvider>
    </IngredientsContextProvider>
  </GlobalContextProvider>
)
