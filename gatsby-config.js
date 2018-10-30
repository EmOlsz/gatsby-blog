module.exports = {
  siteMetadata: {
    title: `ITSG blog`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [`/src/styles/style.module.scss`],
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Playfair Display:regular,regularitalic,bold,bolditalic',
            'Fira Sans:extra-light,extra-lightitalic,regular,regularitalic,medium,mediumitalic',
          ]
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "minimal-ui",
        icon: "src/static/itsg_global.png",
      },
    },
    'gatsby-plugin-offline',
  ]
};