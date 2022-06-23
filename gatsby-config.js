require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    {
      singularName: "article",
      queryParams: {
        publicationState:
          process.env.GATSBY_IS_PREVIEW === "true" ? "preview" : "live",
        populate: {
          cover: "*",
          blocks: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "author",
    },
    {
      singularName: "category",
    },
  ],
  singleTypes: [
    {
      singularName: "about",
      queryParams: {
        populate: {
          blocks: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "global",
      queryParams: {
        populate: {
          favicon: "*",
          defaultSeo: {
            populate: "*",
          },
        },
      },
    },
  ],
};

const manifestConfig = {
  name: `blog-site`,
  short_name: `blog`,
  start_url: `/`,
  background_color: `#fff`,
  theme_color: `#fff`,
  display: `minimal-ui`,
  icon: `./src/images/gatsby-icon.png`,
};

module.exports = {
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
      options: manifestConfig,
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    `gatsby-transformer-remark`,
  ],
};
