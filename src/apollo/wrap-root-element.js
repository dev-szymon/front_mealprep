import React from "react"
import { ApolloProvider } from "react-apollo"
import { client } from "./client"
import { GlobalContextProvider } from "../context/globalContext"

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    <GlobalContextProvider>{element}</GlobalContextProvider>
  </ApolloProvider>
)
