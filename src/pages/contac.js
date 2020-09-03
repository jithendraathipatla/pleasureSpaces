import React from "react"
import LayoutComponant from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import FormFieldComponant from "../components/FormField"
import MainLogo from "../images/logo.png"

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
          <h2>Contact US</h2>
          <span>Get Answers to our Project related Queries</span>
        </div>
        <br/>
        <div css={contact}>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497811.4579802922!2d77.8138861540764!3d12.897944990988549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0d54b614c7b5%3A0x95db2a1aefd50b8b!2sPleasure%20Spaces%20(India)%20Pvt.Ltd.!5e0!3m2!1sen!2sin!4v1599134864280!5m2!1sen!2sin"
              width="100%"
              height="100%"
              frameborder="0"
              style={{ border: "0px" }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
          <div css={paper}>
            <img src={MainLogo} alt="logo" />
            <FormFieldComponant
              label="Your Name"
              id="outlined-size-small"
              size="small"
            />
            <FormFieldComponant
              label="Your Email"
              id="outlined-size-small"
              size="small"
            />{" "}
            <FormFieldComponant
              label="Your Phone"
              id="outlined-size-small"
              size="small"
            />
            <FormFieldComponant
              label="Your Message"
              id="outlined-size-small"
              size="small"
            />
            <div style={{ textAlign: "center" }}>
              <button css={button}>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </LayoutComponant>
  )
}

export default About

const paper = css`
  img {
    height: 150px;
    padding-left: 30%;
  }
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  padding: 20px;
`
const contact = css`
  display: grid;
  grid-template-columns: 7fr 3fr;
`
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
const button = css`
  background-color: #00b7ff;
  color: #ffffff;
  border: none;
  font-size: 12px;
  padding: 7px 30px;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.7px;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
