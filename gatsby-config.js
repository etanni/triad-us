const path = require('path');

module.exports = {
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-shopify-poulo',
      options: {
        navigation: {
          menu: [
            {
              link: '/collections',
              displayName: 'Shop',
              subMenu: [
                {
                  link: '',
                  displayName: '',
                },
              ],
            },
            {
              link: '/about-us',
              displayName: 'About Us',
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
    description:
      'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@gatsbyjs',
    shop: {},
  },
  plugins: [
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['gatsby-theme-shopify-poulo'],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Triad',
        short_name: 'Triad',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#000',
        display: 'standalone',
        icon: 'src/images/icon.png',
      },
    },
  ],
};
