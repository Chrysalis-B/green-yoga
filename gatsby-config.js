module.exports = {
  siteMetadata: {
    title: "Green Yoga",
    description: "Pay as you wish yoga classes in Berlin to fight climate change",
    language: "en"
  },
  pathPrefix: "/green-yoga",
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
    "gatsby-transformer-json",
    "gatsby-plugin-react-helmet"
  ]
}
