import React from "react"
import { navigate } from "gatsby"
import { getAccessToken } from "./index"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (getAccessToken() === "" && location.pathname !== `/app/auth`) {
    navigate("/app/auth")
    return null
  }
  return <Component {...rest} />
}
export default PrivateRoute
