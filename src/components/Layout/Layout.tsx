import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

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
    <React.Fragment>
      {strapiGlobal.siteName && <Header siteTitle={strapiGlobal.siteName} />}
      <main>{children}</main>
    </React.Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
