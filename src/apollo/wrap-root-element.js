import React from "react"
require("dotenv").config()
import { ApolloProvider } from "react-apollo"
import { client } from "./client"

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
