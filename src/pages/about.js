import React from "react"
import LayoutComponant from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"


const About = () => {
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "city_bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
  return (
    <LayoutComponant>
      <br />
      <br />
      <br />
      <div css={one}>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        <div css={two}>
          <h2>About US</h2>
          <span>Get Answers to your Questions</span>
        </div>
        <div style={{height:"400px"}}>

        </div>
        <br />
        <br />
        </div>
    </LayoutComponant>
  )
}

export default About


const one = css`
  img {
    position: relative;
  }
`

const two = css`
  position: absolute;
  top: 25%;
  padding: 0px 140px;
  h2 {
    color: #1d1d1d;
    font-family: "Montserrat", Sans-serif;
    font-size: 55px;
    font-weight: 700;
    line-height: 1.2em;
    letter-spacing: 0px;
    margin-bottom: 2px;
  }
  span {
    color: #7a7a7a;
    font-weight: 700;
    padding-left: 5px;
  }
`