module.exports = {
  siteMetadata: {
    title: `Blog Site`,
    description: `A blog posting site to share and read blog posts.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `blog-site`,
        short_name: `blog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `./src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
