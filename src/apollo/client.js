import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"

export const client = new ApolloClient({
  uri:
    process.env.NODE_ENV !== "production"
      ? "http://localhost:5000/graphql"
      : process.env.API_CONNECTION,
  fetch,
})
