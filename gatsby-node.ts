import path from "path";
import type { GatsbyNode } from "gatsby";

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { data }: { data?: any } = await graphql(`
    query ArticlesAndCategories {
      allStrapiArticle {
        nodes {
          slug
        }
      }
      allStrapiCategory {
        nodes {
          slug
        }
      }
    }
  `);

  const { createPage } = actions;
  // LATEST BLOG-POST PAGES
  data.allStrapiArticle.nodes.map((node: { slug: string }) => {
    createPage({
      path: `/blogs/latest/${node.slug}`,
      component: path.resolve("./src/templates/blog-post.tsx"),
      context: { slug: node.slug },
    });
  });
  // SINGLE-CATEGORY PAGES
  data.allStrapiCategory.nodes.map((node: { slug: string }) => {
    createPage({
      path: `/blogs/tags/${node.slug}`,
      component: path.resolve("./src/templates/category.tsx"),
      context: { slug: node.slug },
    });
  });
  // CATEGORY BLOG-POST PAGES
  data.allStrapiCategory.nodes.map((catg: { slug: string }) => {
    data.allStrapiArticle.nodes.map((post: { slug: string }) => {
      createPage({
        path: `/blogs/tags/${catg.slug}/${post.slug}`,
        component: path.resolve("./src/templates/blog-post.tsx"),
        context: { slug: post.slug },
        defer: true,
      });
    });
  });
};
