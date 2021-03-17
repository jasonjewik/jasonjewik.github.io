module.exports = {
  siteMetadata: {
    title: `Jason Jewik`,
    description: `CS @ UCLA. Interested in AI and using it for mitigating and adapting to the climate crisis. 🤖🌱 He/him.`,
    author: `@jasonjewik`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jason Jewik's Personal Website`,
        short_name: `Jason Jewik`,
        description: `CS @ UCLA. Interested in AI and using it for mitigating and adapting to the climate crisis. 🤖🌱 He/him.`,
        lang: `en`,
        start_url: `/`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `./src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/index.js`),
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-dark-mode`,
  ],
}
