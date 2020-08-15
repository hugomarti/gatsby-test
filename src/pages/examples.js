import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Header from "../examples/Header"

const examples = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data

  return (
    <Layout>
      <p>Hello from Examples Page</p>
      <Header />
      <h5>author: {author}</h5>
    </Layout>
  )
}

export const data = graphql`
  query MyQuery {
    site {
      info: siteMetadata {
        author
        data
        description
        person {
          age
          name
        }
        title
      }
    }
  }
`
export default examples
