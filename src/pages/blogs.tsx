import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout/Layout";
import SEO from "../components/Utils/SEO";
import ArticleList from "../components/BlogsList/ArticleList";

type Props = { data: any };

export default function Blogs({ data }: Props) {
  const { strapiBlog, allStrapiArticle } = data;
  const { articles } = allStrapiArticle;

  return (
    <Layout>
      <SEO seo={{ metaTitle: strapiBlog.title }} />
      <h1>{strapiBlog.title}</h1>
      <ArticleList articles={articles} />
    </Layout>
  );
}

Blogs.propTypes = { data: PropTypes.object };

export const query = graphql`
  query GetArticlesAndPage {
    allStrapiArticle(sort: { fields: publishedAt, order: DESC }) {
      articles: nodes {
        id
        slug
        title
        description
        cover {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        author {
          name
          avatar {
            localFile {
              childImageSharp {
                fixed {
                  src
                  srcSet
                }
              }
            }
          }
        }
        category {
          name
          slug
        }
      }
    }
    strapiBlog {
      title
      description
    }
  }
`;
