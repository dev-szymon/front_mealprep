import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"
const api = process.env.API_URI || require("../../variables.js")

export const client = new ApolloClient({
  uri: api,
  fetch,
})
