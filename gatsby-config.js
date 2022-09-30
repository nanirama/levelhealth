module.exports = {
  siteMetadata: {
    title: `Levels Blog: Ultimate Source for Metabolic Health Information and Advice`,
    description: `The Levels Blog is the leading source of information on the importance of metabolic health and the utility of continuous glucose monitors as biofeedback.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 100,
          backgroundColor: `transparent`,
          webpOptions: {quality: 100}
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://www.levelshealth.com/graphql`,         
        schema: {
          requestConcurrency: 50,
          queryDepth: 5,
          perPage: 100,
          timeout: 36000000,
        },
        debug: {
          timeBuildSteps: true,
        },
        type: {
          __all: {
            limit: 10,
          },
          Page: {
            exclude: true,
          },
          MenuItem: {
            exclude: true,
          },
          Menu: {
            exclude: true,
          },
          Comment: {
            exclude: true,
          },
          Tag: {
            exclude: true,
          },
          MediaItem: {
            localFile: {
              requestConcurrency: 500,
            },
          },
        },
      }
    },
  ],
}
