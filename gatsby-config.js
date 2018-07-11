var isProduction = process.argv.indexOf('-p') >= 0 || process.env.NODE_ENV === 'production';

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postcss: {
          plugins: () => [
            require('postcss-preset-env')({ stage: 0 }),
            require('postcss-import')(),
            require('postcss-url')(),
            require('postcss-css-variables')(),
            require('postcss-cssnext')(),
            require('postcss-reporter')(),
            require('postcss-browser-reporter')({
              disabled: isProduction
            })
          ]
        }
      }
    }
  ],
};
