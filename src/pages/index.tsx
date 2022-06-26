import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Typography } from "@mui/material";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout/Layout";
import SEO from "../components/Utils/SEO";

type Props = { data: any };

export default function About({ data }: Props) {
  const { strapiAbout } = data;
  const { title, blocks } = strapiAbout;
  const { text, imageFile } = blocks.reduce((obj: any, item: any) => {
    return {
      ...obj,
      ...item,
    };
  }, {});
  const image = getImage(imageFile.localFile);

  return (
    <Layout>
      <SEO seo={{ metaTitle: title }} />
      <Typography sx={{ my: 2 }} variant="h2" component="h1">
        {title}
      </Typography>
      {imageFile && image && (
        <GatsbyImage image={image} alt={imageFile.alternativeText} />
      )}
      <ReactMarkdown>{text.data.body}</ReactMarkdown>
    </Layout>
  );
}

About.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query AboutPageData {
    strapiAbout {
      title
      blocks {
        ... on STRAPI__COMPONENT_SHARED_RICH_TEXT {
          text: body {
            data {
              body
            }
          }
        }
        ... on STRAPI__COMPONENT_SHARED_MEDIA {
          imageFile: file {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;
