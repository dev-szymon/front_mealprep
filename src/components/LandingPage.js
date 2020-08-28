import React from "react"
import Loading from "./Loading"

const LandingPage = ({ loading, data }) => {
  return <>{loading ? <Loading /> : <h2>hello</h2>}</>
}

export default LandingPage
