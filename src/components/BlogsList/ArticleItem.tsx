import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Link, Avatar } from "@mui/material";
import { Link as RouterLink } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import ArticleCard from "../UI/ArticleCard";

type Props = { article: any };

export default function ArticleItem({ article }: Props) {
  const { cover, author, category } = article;
  const coverImage = getImage(cover.localFile);
  const authorAvatar = author.avatar.localFile.childImageSharp.fixed;

  return (
    <ArticleCard>
      {category?.slug && (
        <Link component={RouterLink} to={`${category.slug}`}>
          {`#${category.name}`}
        </Link>
      )}
      <Typography variant="h3" component="h1">
        {article.title}
      </Typography>
      {authorAvatar && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: {
              xs: "center",
              sm: "flex-end",
            },
            m: 2,
          }}
        >
          <Avatar
            sx={{ width: 56, height: 56 }}
            src={authorAvatar.src}
            srcSet={authorAvatar.srcSet}
            alt={author.name}
          />
          <Typography variant="caption">{author.name}</Typography>
        </Box>
      )}
      <Link component={RouterLink} to={`${article.slug}`}>
        {coverImage && (
          <GatsbyImage image={coverImage} alt={cover.alternativeText} />
        )}
        <Typography variant="h5" component="p" mt={1}>
          {article.description}
        </Typography>
      </Link>
    </ArticleCard>
  );
}

ArticleItem.propTypes = {
  article: PropTypes.object,
};
