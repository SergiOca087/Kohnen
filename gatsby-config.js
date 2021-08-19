require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
    siteMetadata: {
        title: "",
        defaultTitle: "",
        defaultDescription: "",
        titleTemplate: "",
        description: "",
        url: "", // No trailing slash allowed
        siteUrl: "https://demo.inmotionrealestate.com/era",
        // image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
        // twitterUsername: "@sharplaunch",
    },
    plugins: [
        {
            resolve: "gatsby-source-wordpress",
            options: {
                url: "http://demo.inmotionrealestate.com/kohnen/graphql",
            },
        },
        "gatsby-plugin-styled-components",
        "gatsby-plugin-gatsby-cloud",
        "gatsby-plugin-image",
        // {
        //   resolve: "gatsby-plugin-google-analytics",
        //   options: {
        //     trackingId: "",
        //   },
        // },
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/assets/images/",
            },
            __key: "images",
        },
        {
            resolve: `gatsby-plugin-scroll-reveal`,
            once: true,
            threshold: 0,
        },
    ],
};
