import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Link, Avatar } from "@mui/material";
import { Link as RouterLink } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";

import Layout from "../Layout/Layout";
import SEO from "../Utils/SEO";
import ArticleWrapper from "../UI/ArticleWrapper";

type Props = { article: any };

export default function Article({ article }: Props) {
  const { title, description, publishedAt, cover, author, category, texts } =
    article;
  const coverImage = getImage(cover.localFile);
  const authorAvatar = author.avatar.localFile.childImageSharp.fixed;

  return (
    <Layout>
      <SEO seo={{ metaTitle: title, metaDescription: description }} />
      <ArticleWrapper>
        {coverImage && (
          <GatsbyImage image={coverImage} alt={cover.alternativeText} />
        )}
        <Box sx={{ p: 2 }}>
          <Link component={RouterLink} to={`${category.slug}`}>
            {`#${category.name}`}
          </Link>
          <Typography
            sx={{ mt: 1 }}
            variant="subtitle1"
            component="p"
            align="right"
          >
            {publishedAt}
          </Typography>
          {authorAvatar && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: {
                  xs: "center",
                  sm: "flex-start",
                },
                m: 2,
              }}
            >
              <Avatar
                sx={{ width: 72, height: 72 }}
                src={authorAvatar.src}
                srcSet={authorAvatar.srcSet}
                alt={author.name}
              />
              <Typography variant="subtitle1" component="p">
                {author.name}
              </Typography>
            </Box>
          )}
          <Typography sx={{ m: "2rem 0 3rem" }} variant="h1">
            {title}
          </Typography>
          {texts.map(
            (text: { id?: string; body?: any }) =>
              Object.keys(text).length > 0 && (
                <ReactMarkdown key={text.id}>
                  {text.body.data.body}
                </ReactMarkdown>
              )
          )}
        </Box>
      </ArticleWrapper>
    </Layout>
  );
}

Article.propTypes = {
  article: PropTypes.object,
};
