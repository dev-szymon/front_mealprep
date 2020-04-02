import React from "react"
import { ApolloProvider } from "react-apollo"
import { client } from "./client"
import { GlobalContextProvider } from "../context/globalContext"

export const wrapRootElement = ({ element }) => (
  <GlobalContextProvider>
    <ApolloProvider client={client}>{element}</ApolloProvider>
  </GlobalContextProvider>
)
