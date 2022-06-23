import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

type Props = { siteTitle: string };

export default function Header({ siteTitle }: Props) {
  return (
    <header>
      <Link to="/">{siteTitle || "Index"}</Link>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};
