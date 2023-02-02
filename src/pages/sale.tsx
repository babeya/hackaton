import * as React from "react"
import { HeadFC, Link, PageProps } from "gatsby"
import Layout from "../components/layout"

const SalePage: React.FC<PageProps> = () => {
  return (
    <Layout>
      Hello 

      <div>
        Vente 1
        <div>
        </div>
      </div>
    </Layout>
  )
}

export default SalePage

export const Head: HeadFC = () => <title>Vente 1</title>
