import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"
import { getAccessToken } from "../auth"

const api =
  process.env.NODE_ENV === "development"
    ? process.env.GATSBY_GRAPHQL_API
    : process.env.production.GATSBY_GRAPHQL_API

export const client = new ApolloClient({
  uri: api,
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
