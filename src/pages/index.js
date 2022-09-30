import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import LatestPost from "../components/elements/LatestPost"
import CategoryListsection from "../components/elements/CategoryList"


const IndexPage = () => (
  <Layout>
    <div className="bg-gradient relative md:pt-36 pt-32 md:pb-28 pb-20">
      <CategoryListsection />
      <LatestPost />
    </div>
  </Layout>
)
export default IndexPage
