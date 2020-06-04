import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"

export const client = new ApolloClient({
  uri: process.env.API_CONNECTION,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  fetch,
})
