module.exports = {
  siteMetadata: {
    siteTitle: `Chris Parsons Wiki`,
    defaultTitle: `Chris Parsons Wiki`,
    siteTitleShort: `Chris Parsons Wiki`,
    siteDescription: `Wiki brain-dump for Chris Parsons`,
    siteUrl: `https://wikichris.gatsbyjs.io/`,
    siteAuthor: `@ccp92`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        repositoryUrl: `https://github.com/ccp92/wiki`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chris Parsons Wiki`,
        short_name: `Chris Parsons Wiki`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://wikichris.gatsbyjs.io/`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
