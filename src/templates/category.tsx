import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout/Layout";
import SEO from "../components/Utils/SEO";
import ArticleList from "../components/BlogsList/ArticleList";
import CategoryHeader from "../components/CategoryHeader/CategoryHeader";

type Props = { data: any };

export default function Category({ data }: Props) {
  const { category } = data;

  return (
    <Layout>
      <SEO
        seo={{
          metaTitle: category.name,
          metaDescription: category.description,
        }}
      />
      <CategoryHeader
        title={category.name}
        description={category.description}
      />
      <ArticleList articles={category.articles} />
    </Layout>
  );
}

Category.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query GetCategory($slug: String) {
    category: strapiCategory(slug: { eq: $slug }) {
      name
      description
      articles {
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
      }
    }
  }
`;
