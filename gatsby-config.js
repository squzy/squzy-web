module.exports = {
  siteMetadata: {
    siteTitle: `Squzy - a high-performance open-source monitoring, incident and alert system written in Golang with Bazel and love.`,
    defaultTitle: `Squzy system`,
    siteTitleShort: `Squzy system`,
    siteDescription: `High-performance open-source monitoring, incident and alert system written in Golang with Bazel and love.`,
    siteUrl: `https://squzy.app`,
    siteAuthor: `@PxyUp`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#7159c1`,
    basePath: `/`,
    footer: `Thanks Gatsby + Rocketseat`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/squzy/squzy-web`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Squzy - a high-performance monitoring system`,
        short_name: `Squzy`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://squzy.app`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-168074024-1`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
            }
          },
          {
            resolve: "gatsby-remark-images-anywhere",
            options: {
              staticDir: 'static',
            }
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
  ],
};
