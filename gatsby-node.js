const path = require(`path`);
const { slash } = require(`gatsby-core-utils`);
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    // query content for WordPress posts
    const {
        data: {
            allWpPost: { nodes: allWpPosts },
            allWpCasestudy: { nodes: allWpCaseStudy },
            allWpTeam: { nodes: allWpTeam },
        },
    } = await graphql(`
        query {
            allWpPost {
                nodes {
                    id
                    slug
                }
            }
            allWpCasestudy {
                nodes {
                    id
                    slug
                }
            }
            allWpTeam {
                nodes {
                    id
                    slug
                }
            }
        }
    `);

    // Detail page templates
    const postTemplate = path.resolve(`./src/templates/post.js`);
    const caseStudyTemplate = path.resolve(`./src/templates/casestudy.js`);
    const bioTemplate = path.resolve(`./src/templates/bio.js`);

    const createPostsPages = (arr, template) => {
        return arr.forEach((post) => {
            createPage({
                // will be the url for the page
                path: post.slug,
                // specify the component template of your choice
                component: slash(template),
                // In the ^template's GraphQL query, 'id' will be available
                // as a GraphQL variable to query for this post's data.
                context: {
                    id: post.id,
                },
            });
        });
    };

    createPostsPages(allWpPosts, postTemplate);
    createPostsPages(allWpCaseStudy, caseStudyTemplate);
    createPostsPages(allWpTeam, bioTemplate);
};
//     // Programatically create pages
//     allWpPosts.forEach((post) => {
//         createPage({
//             // will be the url for the page
//             path: post.uri,
//             // specify the component template of your choice
//             component: slash(postTemplate),
//             // In the ^template's GraphQL query, 'id' will be available
//             // as a GraphQL variable to query for this post's data.
//             context: {
//                 id: post.id,
//             },
//         });
//     });

//     allWpCaseStudy.forEach((post) => {
//         createPage({
//             // will be the url for the page
//             path: post.uri,
//             // specify the component template of your choice
//             component: slash(caseStudyTemplate),
//             // In the ^template's GraphQL query, 'id' will be available
//             // as a GraphQL variable to query for this post's data.
//             context: {
//                 id: post.id,
//             },
//         });
//     });

//     allWpTeam.forEach((post) => {
//         createPage({
//             // will be the url for the page
//             path: post.uri,
//             // specify the component template of your choice
//             component: slash(bioTemplate),
//             // In the ^template's GraphQL query, 'id' will be available
//             // as a GraphQL variable to query for this post's data.
//             context: {
//                 id: post.id,
//             },
//         });
//     });
// };
