import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"
const api = process.env.API_URI

export const client = new ApolloClient({
  uri: api,
  fetch,
})
