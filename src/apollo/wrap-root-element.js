import React from "react"
import { ApolloProvider } from "@apollo/react-hooks"
import { client } from "./client"
import RefreshToken from "../auth/RefreshToken"

export const wrapRootElement = ({ element }) => {
  return (
    <ApolloProvider client={client}>
      <RefreshToken>{element}</RefreshToken>
    </ApolloProvider>
  )
}
