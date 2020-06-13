import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"
import { createHttpLink } from "apollo-link-http"

const link = createHttpLink({ uri: "https://eatwell.club/graphql" })

export const client = new ApolloClient({
  link,
  fetch,
})
