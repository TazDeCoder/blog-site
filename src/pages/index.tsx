import React from "react";
import PropTypes from "prop-types";

import Layout from "../components/Layout/Layout";
import SEO from "../components/Utils/SEO";

type Props = {};

export default function Homepage({}: Props) {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Homepage</h1>
    </Layout>
  );
}

Homepage.propTypes = {};
