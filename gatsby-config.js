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
    title: 'Triad - Made to be free',
    description:
      'Triad is quality fashion with high-tech performance at accessible prices. Modern design, all-week performance, and industry-leading technology. Triad is the lifestyle brand for people made to be free.',
    author: '@weartriad',
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
