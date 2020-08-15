/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Gatsby Tutorial",
    description: "some random description",
    author: "@hugo",
    data: ["item 1", "item 2"],
    person: { name: "peter", age: 32 },
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `lzr186g5gz5g`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `UobBD8vR5v1LFKgQgn-kuMxWRDY0v6tPLhzdFFwDloo`,
      },
    },
  ],
}
