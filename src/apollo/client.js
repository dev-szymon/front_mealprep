import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"

export const client = new ApolloClient({
  uri:
    process.env.NODE_ENV == "production"
      ? process.env.NODE_ENV
      : `http://localhost:5000/graphql`,
  fetch,
})
