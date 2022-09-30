import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
const BlogTemplate = (props) => {  
  return (
    <Layout>
       <h2>Blog Post Single Page</h2>
    </Layout>  
  )
}
export const query = graphql`
  query getPostDetails($id: String!) {
    postDetails:  wpPost(id: {eq: $id}) {
      content
      id
      title
      modified(formatString: "YYYY-MM-DD")
      date(formatString: "YYYY-MM-DD")
      featuredImage {
        node {
          altText
          localFile {
            publicURL
            childImageSharp {
              gatsbyImageData( width:1600)
            }
          }
        }
      }
    }
  }
`

export default BlogTemplate

