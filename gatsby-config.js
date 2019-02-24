module.exports = {
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-shopify-poulo',
      options: {
        navigation: {
          menu: [
            {
              link: '/men',
              displayName: 'Men',
            },
            {
              link: '/women',
              displayName: 'Women',
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
    author: `@gatsbyjs`,
    shop: {
      logo:
        'http://raw.githubusercontent.com/AlexanderProd/gatsby-shopify-starter/master/ressources/shopify%2Bgatsby.png',
    },
  },
};
