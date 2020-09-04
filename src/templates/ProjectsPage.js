import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const ProjectsPage = ({ data }) => {
  const Projects = data.projectsJson

  return (
    <Layout>
       <Image
            fluid={Projects.image.childImageSharp.fluid}
            alt={Projects.title}
          />
      <h1>{Projects.title}</h1>
    </Layout>
  )
}

export default ProjectsPage