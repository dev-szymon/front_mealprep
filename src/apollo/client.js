import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"
import { getAccessToken } from "../auth"

export const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
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
