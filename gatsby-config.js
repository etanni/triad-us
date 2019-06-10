const path = require('path');

module.exports = {
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-shopify-poulo',
      options: {
        dirName: __dirname,
        navigation: {
          menu: [
            {
              type: 'megamenu',
              displayName: 'Shop',
            },
            {
              link: '/our-story',
              displayName: 'Our Story',
            },
            {
              link: '/our-tech',
              displayName: 'Our Tech',
            },
          ],
        },
        paymentMethods: [],
        shopifyOptions: {
          shopName: 'poulo2',
          accessToken: 'e06636fefd3902d3a578c9624e064944',
        },
        activatePWA: true,
        colorMap: [
          { key: 'PANTONE 16-4134 TCX', value: 'rgb(83, 156, 204)' },
          { key: 'PANTONE 2227 XGC', value: 'rgb(91, 190, 196)' },
          { key: 'Red', value: 'rgb(132, 57, 79)' },
        ],
      },
    },
  ],
  siteMetadata: {
    title: 'Triad - Made to be free',
    siteUrl: 'https://weartriad.com',
    description:
      'Triad is quality fashion with high-tech performance at accessible prices. Modern design, all-week performance, and industry-leading technology. Triad is the lifestyle brand for people made to be free.',
    author: '@weartriad',
    shop: {},
    footerDisclaimer: '© 2019 | Triad Limited',
    social: {
      twitter: 'weartriad',
      instagram: 'weartriad',
      facebook: 'weartriad',
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
