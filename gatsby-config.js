const path = require('path');

module.exports = {
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-shopify-poulo',
      options: {
        navigation: {
          menu: [
            {
              link: '/tops',
              displayName: 'Tops',
            },
            {
              link: '/bottoms',
              displayName: 'Bottoms',
            },
            {
              link: '/accessories',
              displayName: 'Accessories',
            },
            {
              link: '/collections',
              displayName: 'Collections',
              subMenu: [
                {
                  link: '',
                  displayName: '',
                },
              ],
            },
          ],
        },
        shopifyOptions: {
          shopName: 'graphql',
          accessToken: 'dd4d4dc146542ba7763305d71d1b3d38',
        },
      },
    },
  ],
  siteMetadata: {
    title: 'Test Shop',
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: '@gatsbyjs',
    shop: {
      logo:
        'https://raw.githubusercontent.com/AlexanderProd/gatsby-shopify-starter/master/ressources/shopify%2Bgatsby.png',
    },
  },
  plugins: [
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['gatsby-theme-shopify-poulo'],
      },
    },
  ],
};
