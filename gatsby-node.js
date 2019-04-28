/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        react: path.resolve('./node_modules/react'),
        'react-dom': path.resolve('./node_modules/react-dom'),
      },
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            handle
            tags
          }
        }
      }
    }
  `);

  await result.data.allShopifyProduct.edges.forEach(({ node, tags = [] }) => {
    if (tags.indexOf('template-2') !== -1) {
      createPage({
        path: `/product/${node.handle}/`,
        component: `${__dirname}/src/templates/product-2.js`,
        context: {
          handle: node.handle,
        },
      });
    } else {
      createPage({
        path: `/product/${node.handle}/`,
        component: `${__dirname}/src/templates/product.js`,
        context: {
          handle: node.handle,
        },
      });
    }
  });
};
