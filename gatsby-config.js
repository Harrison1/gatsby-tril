module.exports = {
  siteMetadata: {
    title: 'Trilogy Education Services',
  },
  pathPrefix: `/gatsby-tril`,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-trilogy',
        short_name: 'example',
        start_url: '/',
        background_color: '#38bcdb',
        theme_color: '#38bcdb',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
