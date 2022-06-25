import type { GatsbyConfig } from "gatsby";

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
          author: {
            populate: "*",
          },
          category: "*",
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
      singularName: "blog",
    },
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

const config: GatsbyConfig = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    `gatsby-transformer-remark`,
  ],
};

export default config;
