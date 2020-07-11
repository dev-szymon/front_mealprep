import { ApolloClient } from "apollo-client"
import { ApolloLink, Observable } from "apollo-link"
import { InMemoryCache } from "apollo-cache-inmemory"
import { HttpLink } from "apollo-link-http"
import { onError } from "apollo-link-error"
import fetch from "isomorphic-fetch"
import { getAccessToken } from "../auth"
import { TokenRefreshLink } from "apollo-link-token-refresh"
import jwtDecode from "jwt-decode"
import { setAccessToken } from "../auth"

const cache = new InMemoryCache({})

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable(observer => {
      let handle
      Promise.resolve(operation)
        .then(operation => {
          const accessToken = getAccessToken()
          if (accessToken) {
            operation.setContext({
              headers: {
                authorization: accessToken,
              },
            })
          }
        })
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          })
        })
        .catch(observer.error.bind(observer))

      return () => {
        if (handle) handle.unsubscribe()
      }
    })
)

export const client = new ApolloClient({
  link: ApolloLink.from([
    new TokenRefreshLink({
      accessTokenField: "accessToken",
      isTokenValidOrUndefined: () => {
        const token = getAccessToken()

        if (!token) {
          return true
        }

        try {
          const { exp } = jwtDecode(token)
          if (Date.now() >= exp * 1000) {
            return false
          } else {
            return true
          }
        } catch {
          return false
        }
      },
      fetchAccessToken: () => {
        return fetch(`${process.env.GATSBY_GRAPHQL_API}/refresh_token`, {
          method: "POST",
          credentials: "include",
        })
      },
      handleFetch: accessToken => {
        setAccessToken(accessToken)
      },
      handleError: err => {
        console.warn("Your token is invalid. Try to relogin")
        console.error(err)
      },
    }),
    onError(({ graphQLErrors, networkError }) => {
      console.log(graphQLErrors)
      console.log(networkError)
    }),
    requestLink,
    new HttpLink({
      uri: `${process.env.GATSBY_GRAPHQL_API}/graphql`,
      credentials: "include",
    }),
  ]),
  cache,
})
