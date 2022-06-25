exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
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
      component: require.resolve("./src/templates/blog-post.tsx"),
      context: { slug: node.slug },
    });
  });
};
