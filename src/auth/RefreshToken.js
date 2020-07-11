import React, { useEffect, useState } from "react"
import { setAccessToken } from "../auth"
import Loading from "../components/Loading"

const RefreshToken = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${process.env.GATSBY_GRAPHQL_API}/refresh_token`, {
      method: "POST",
      credentials: "include",
    }).then(async call => {
      const { accessToken } = await call.json()
      setAccessToken(accessToken)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <Loading />
  }

  return null
}

export default RefreshToken
