const withSass = require('@zeit/next-sass');
const withOffline = require('next-offline');
const withPWA = require('next-pwa');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const isProd = process.env.NODE_ENV === 'production';

module.exports = withSass(
  withMDX(
    withPWA(
      withOffline({
        pageExtensions: ['js', 'mdx'],
        pwa: {
          disable: !isProd,
          dest: 'public',
        },
      })
    )
  )
);
