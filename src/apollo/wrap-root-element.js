import React from "react"
import { ApolloProvider } from "@apollo/react-hooks"
import { client } from "./client"
import "../components/layout/global.css"

export const wrapRootElement = ({ element }) => {
  return <ApolloProvider client={client}>{element}</ApolloProvider>
}
