import * as React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Layout from "../components/siteLayout"

export const pageQuery = graphql`
  query AboutQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
  }
`
const AboutPage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, excerpt } = markdownRemark

  return (
    <Layout className="page">
      <Seo title={frontmatter.title} description={excerpt} />
      {/* <div className="wrapper"> */}
        {/* <h1>{frontmatter.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: html }} /> */}
        <iframe loading="lazy" id="" style={{width:'100%', height:'100vh', margin:'0 auto'}} title="iFrame" className="iframe boom" width="980" height="550" src="https://twilightscapes.com" frameBorder="0" allowFullScreen></iframe>
      {/* </div> */}
    </Layout>
  )
}

export default AboutPage
