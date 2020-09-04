import React from "react"
import { css } from "@emotion/core"
import TitleComponant from "../components/title"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {Link} from 'gatsby'

const OurProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "slider1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 230) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div css={main}>
      <TitleComponant title="Our Projects" />
      <span>
        Hilife Ventures Pvt.Ltd. is one of the leading builders of residential
        apartments in Bangalore Company lays strong emphasis on environment
        management, water harvesting and high safety standards.
      </span>
      <br />
      <br />
      <div css={ourproject}>
        <div css={projects}>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          <h3>PSI Oliver</h3>
          <button><Link to="/psi-oliver">Visit Site</Link></button>
        </div>
      </div>
      <br />
      <br />
    </div>
  )
}

export default OurProjects

const projects = css`
  box-shadow: 0px 0px 1px 2px rgba(0, 0, 0, 0.2);
  padding-bottom: 10px;
  h3 {
    margin-top: 15px;
    font-size: 15px;
  }
  button {
    background-color: #00b7ff;
    color: #ffffff;
    border: none;
    font-size: 12px;
    padding: 7px 30px;
    border-radius: 4px;
    text-transform: uppercase;
    font-weight: 600;
    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`

const ourproject = css`
  display: grid;
  grid-template-columns: 3fr 3fr 3fr;
`

const main = css`
  text-align: center;
  padding: 0px 130px;
`
