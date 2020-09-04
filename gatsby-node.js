/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions: { createPage }, graphql }) => {
    const data = await graphql(`
      {
        allProjectsJson {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)
  
    if (data.errors) {
      console.log("Error retrieving data", data.errors)
      return
    }
  
    const ProjectTemplate = require.resolve("./src/templates/ProjectsPage.js")
  
    data.data.allProjectsJson.edges.forEach(edge => {
      createPage({
        path: `/${edge.node.slug}/`,
        component: ProjectTemplate,
        context: {
          slug: edge.node.slug,
        },
      })
    })
  }