import path from "path";
import type { GatsbyNode } from "gatsby";

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { data }: { data?: any } = await graphql(`
    query Articles {
      allStrapiArticle {
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
};
