import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Box, Typography } from "@mui/material";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout/Layout";
import SEO from "../components/Utils/SEO";

type Props = { data: any };

export default function NotFoundPage({ data }: Props) {
  const { strapiFallback } = data;
  const { title, description, file } = strapiFallback;
  const image = getImage(file.localFile);

  return (
    <Layout>
      <SEO
        seo={{
          metaTitle: title,
          metaDescription: description,
        }}
      />
      <Box
        sx={{
          textAlign: {
            xs: "center",
            sm: "initial",
          },
        }}
      >
        <Typography variant="h1">{title}</Typography>
        <Typography variant="h5" component="p">
          {description}
        </Typography>
        {image && <GatsbyImage image={image} alt={file.alternativeText} />}
      </Box>
    </Layout>
  );
}

NotFoundPage.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query FallbackPageData {
    strapiFallback {
      title
      description
      file {
        alternativeText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
