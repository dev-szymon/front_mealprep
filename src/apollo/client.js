import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"

export const client = new ApolloClient({
  uri:
    process.env.NODE_ENV !== "production"
      ? `https://www.eatwell.club/graphql`
      : process.env.NODE_ENV,
  fetch,
})
