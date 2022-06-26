import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

type Props = {
  title: string;
  description: string;
};

export default function CategoryHeader({ title, description }: Props) {
  return (
    <Box
      sx={{
        backgroundColor: "#efefef",
        p: 4,
        my: 3,
      }}
      component="header"
    >
      <Typography variant="h3" component="h1">{`#${title}`}</Typography>
      <Typography>{description}</Typography>
    </Box>
  );
}

CategoryHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
