import React from "react"
import Layout from "../../components/layout/layout"
import { Link } from "gatsby"

const Cookbook = () => {
  return (
    <Layout>
      <div>Cookbook</div>
      <div>
        <Link to="/cookbook/creator">
          <button>dodaj</button>
        </Link>
      </div>
    </Layout>
  )
}

export default Cookbook
