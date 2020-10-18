const withSass = require('@zeit/next-sass');

const isProd = process.env.NODE_ENV === 'production';

const withPWA = require('next-pwa');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

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
