import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Container, CssBaseline } from "@mui/material";

import Header from "./Header";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function Layout({ children }: Props) {
  const { strapiGlobal } = useStaticQuery(graphql`
    query GlobalSiteMetaData {
      strapiGlobal {
        siteName
        siteDescription
      }
    }
  `);

  return (
    <Container sx={{ py: 2 }}>
      <CssBaseline />
      {strapiGlobal.siteName && <Header siteTitle={strapiGlobal.siteName} />}
      <main>{children}</main>
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
