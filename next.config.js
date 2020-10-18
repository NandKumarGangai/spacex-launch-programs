const withSass = require('@zeit/next-sass');
const withPWA = require('next-pwa');
const withOffline = require('next-offline');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const isProd = process.env.NODE_ENV === 'production';

module.exports = withSass(
  withOffline(
    withMDX(
      withPWA({
        pageExtensions: ['js', 'mdx'],
        pwa: {
          disable: !isProd,
          dest: 'public',
        },
      })
    )
  )
);
