const _l = require('lodash');
const Promise = require('bluebird');
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
     graphql(`
        query{
            allPosts : allWpPost {
              edges {
                node {
                  id
                  slug
                }
              }
            }
           
        }      
    `).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }
        
      _l.each(result.data.allPosts.edges, (edge) => {
        createPage({
            path: `blog/${edge.node.slug}`,
            component: path.resolve("./src/templates/blog-template.js"),
            context: {
              id: edge.node.id
            },
        })
      })
      resolve();
    });
  })
}