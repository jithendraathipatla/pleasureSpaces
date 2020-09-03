import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import DrawerComponant from "../components/drawer"
import { css } from "@emotion/core"
import MainLogo from "../images/logo.png"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const Header = ({ siteTitle }) => (
  <header>
    <div css={main}>
      <div css={logopart}>
        <DrawerComponant />
        <img src={MainLogo} alt="Pleasure Spaces" css={mobildonly}/>
      </div>
      <div css={links}>
        <div css={social}>
          <div>
            <a style={{ fontSize: "12px" }}>9999999999</a>
          </div>
          <div>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
        <div>
          <Link to="/" activeClassName="active">
            Home
          </Link>
          <Link to="/about" activeClassName="active">
            About
          </Link>
          <Link to="/projects" activeClassName="active">
            Projects
          </Link>
          <Link to="/contac" activeClassName="active">
            Contact
          </Link>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const social = css`
  text-align: end;
  margin-bottom: 15px;
  padding-bottom: 10px;
  margin-top: 9px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eeee;
  :nth-child(1) a {
    margin-left: 0px;
  }
  svg {
    margin-left: 20px;
    color: #00b200;
  }
`

const links = css`
  a {
    margin-left: 70px;
    text-decoration: none;
    color: black;
    font-size: 20px;
    font-weight: 600;
    :nth-child(1) {
      margin-left: 0px;
    }
  }
  @media (max-width: 600px) {
    display: none;
  }
`

const logopart = css`
  img {
    height: 100px;
    margin-bottom: 2px;
    margin-top: -30px;
  }
  svg {
    display: none;
    @media (max-width: 600px) {
      display: block;
      font-size:24px;
      margin-top:50%;
    }
  }
  h4 {
    margin-bottom: 4px;
    margin-top: -5px;
  }
  @media (max-width: 600px) {
    display: flex;
  }
`
const main = css`
  display: flex;
  justify-content: space-between;
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.4rem;
  z-index: 100;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.09);
  background: #fff;
  padding-right: 20px;
`

const mobildonly = css`
@media(max-width:600px){
  margin-top: -8px !important;
  margin-left: 50%;
  transform: translate(-32%, 0%);
}
`
