import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
    }
  }
`

const ProjectsPage = ({ data }) => {
  const Projects = data.projectsJson

  return (
    <Layout>
      <h1>{Projects.title}</h1>
    </Layout>
  )
}

export default ProjectsPage