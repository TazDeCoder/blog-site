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

  data.allStrapiArticle.nodes.map((node: { slug: string }) => {
    createPage({
      path: `/blogs/${node.slug}`,
      component: path.resolve("./src/templates/blog-post.tsx"),
      context: { slug: node.slug },
    });
  });

  data.allStrapiCategory.nodes.map((node: { slug: string }) => {
    createPage({
      path: `/blogs/${node.slug}`,
      component: path.resolve("./src/templates/category.tsx"),
      context: { slug: node.slug },
    });
  });
};
