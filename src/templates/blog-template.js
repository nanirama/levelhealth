import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
const BlogTemplate = (props) => {
  console.log('props', props)
  const { title } = props.data.postDetails
  return (
    <Layout>
      <div className="bg-gradient relative md:pt-36 pt-32 md:pb-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:mt-8 mt-20">
          <div className="bg-black/[.03] border border-gray-200 rounded-l-xl md:rounded-b-none md:rounded-bl-xl rounded-b-xl flex md:flex-row flex-col-reverse justify-between items-center h-100">
            <div className="w-full xl:px-16 sm:px-10 px-4 md:py-5 py-14 flex flex-col lg:gap-8 gap-5 justify-center h-100">
              <h2 className="xl:text-6xl lg:text-5xl text-4xl text-black">{title && title}</h2>
            </div>

          </div>
        </div>
      </div>
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