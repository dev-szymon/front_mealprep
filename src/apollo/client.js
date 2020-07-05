import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"
import { getAccessToken } from "../auth"

export const client = new ApolloClient({
  uri: process.env.GATSBY_GRAPHQL_API,
  fetch,
  request: operation => {
    const accessToken = getAccessToken()
    operation.setContext({
      headers: {
        authorization: accessToken ? accessToken : "",
      },
    })
  },
})
