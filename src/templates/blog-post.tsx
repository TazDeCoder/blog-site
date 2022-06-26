import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout/Layout";
import SEO from "../components/Utils/SEO";
import ArticlePost from "../components/ArticlePost/ArticlePost";

type Props = { data: any };

export default function BlogPost({ data }: Props) {
  const { strapiArticle } = data;
  return (
    <Layout>
      <SEO
        seo={{
          metaTitle: strapiArticle.title,
          metaDescription: strapiArticle.description,
        }}
      />
      <ArticlePost article={strapiArticle} />
    </Layout>
  );
}

BlogPost.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query GetArticle($slug: String) {
    strapiArticle(slug: { eq: $slug }) {
      title
      description
      publishedAt(formatString: "MMMM DD YYYY")
      texts: blocks {
        ... on STRAPI__COMPONENT_SHARED_RICH_TEXT {
          id
          body {
            data {
              body
            }
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
      cover {
        alternativeText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      category {
        name
        slug
      }
    }
  }
`;
