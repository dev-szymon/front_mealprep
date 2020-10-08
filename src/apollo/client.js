import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { HttpLink } from "apollo-link-http"
import fetch from "isomorphic-fetch"

const cache = new InMemoryCache({})

export const client = new ApolloClient({
  link: new HttpLink({
    uri: `${process.env.GATSBY_GRAPHQL_API}/graphql`,
    credentials: "include",
  }),
  cache,
  fetch,
})
