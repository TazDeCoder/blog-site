import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout/Layout";
import SEO from "../components/Utils/SEO";

type Props = { data: any };

export default function About({ data }: Props) {
  const { strapiAbout } = data;

  return (
    <Layout>
      <SEO seo={{ metaTitle: strapiAbout.title }} />
      <h1>{strapiAbout.title}</h1>
    </Layout>
  );
}

About.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query AboutSiteMetaData {
    strapiAbout {
      title
    }
  }
`;
