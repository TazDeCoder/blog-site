import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";

import ArticleItem from "./ArticleItem";

type Props = { articles: any[] };

export default function ArticleList({ articles }: Props) {
  return (
    <Grid container spacing={2}>
      {articles.map(article => {
        return (
          <Grid key={article.id} item xs={12} sm={6} md={4}>
            <ArticleItem article={article} />
          </Grid>
        );
      })}
    </Grid>
  );
}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
};
