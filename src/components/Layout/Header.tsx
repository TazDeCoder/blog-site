import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "gatsby";
import { Stack, Link } from "@mui/material";

type Props = { siteTitle: string };

export default function Header({ siteTitle }: Props) {
  return (
    <header>
      <Stack component="nav" direction="row" spacing={1}>
        <Link component={RouterLink} to="/">
          {siteTitle || "Homepage"}
        </Link>
        <Link component={RouterLink} to="/blogs/latest">
          Latest
        </Link>
      </Stack>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};
