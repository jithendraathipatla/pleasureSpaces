/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { css } from "@emotion/core"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        
        <div css={footer}>
         <div>
         © {new Date().getFullYear()}, Pleasure Spaces
         </div>
         <div css={footerLinks}>
         <Link to="/">
            Home
          </Link>
          <Link to="/about">
            About
          </Link>
          <Link to="/projects">
            Projects
          </Link>
          <Link to="/contac">
            Contact
          </Link>
         </div>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const footerLinks = css`
  a{
    text-decoration: none;
    color:white;
    padding-left:40px;
    font-size:16px;
    :hover{
      text-decoration: underline;
    }
    @media(max-width:600px){
      padding-left:20px;
    }
  }
`


const footer = css`
background: #15415B;
color: white;
display: flex;
justify-content: space-between;
padding:30px 15px;
`