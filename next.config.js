const withSass = require('@zeit/next-sass');
const withPWA = require('next-pwa');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const isProd = process.env.NODE_ENV === 'production';

module.exports = withSass(
  withMDX(
    withPWA({
      pageExtensions: ['js', 'mdx'],
      pwa: {
        disable: !isProd,
        dest: 'public',
      },
    })
  )
);
