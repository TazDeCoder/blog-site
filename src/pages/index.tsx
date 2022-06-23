import React from "react";
import PropTypes from "prop-types";

import Layout from "../components/Layout/Layout";
import Seo from "../components/Utils/SEO";

type Props = {};

export default function Homepage({}: Props) {
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Homepage</h1>
    </Layout>
  );
}

Homepage.propTypes = {};
