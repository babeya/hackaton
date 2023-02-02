import * as React from "react"
import { HeadFC, Link, PageProps } from "gatsby"
import Layout from "../components/layout"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      Hello 

      <div>
        Liste des ventes
        <div>
          <Link to="/sale"> vente 1 </Link>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
