import React from "react"

import { css } from "@emotion/core"
import Layout from "../components/layout"
import SliderImages from "../components/slider"
import SEO from "../components/seo"
import MainLogo from "../images/logo.png"
import { FaBuilding, FaLeaf } from "react-icons/fa"
import OurProjectsComponant from '../components/ourprojects'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SliderImages />
    <div css={aboutpart}>
      <div style={{ textAlign: "center" }}>
        <img src={MainLogo} alt="Pleasure Spaces" />
      </div>
      <span>
        The story of pleasure spaces (India) Pvt Ltd has its genesis as a
        partnership firm of 3individuals in the year 2016. With the short period
        of time PSI gained the trust of the Investors and became synonymous with
        some of the most inspiring & innovating real estate spaces in prominent
        residential and commercial real estate developments.
        <br />
        <br />
        PSI is more than a real estate development enterprise. It's an idea that
        rests on Innovation,providing the best and creating benchmarks. As
        individuals and as an organisation PSI adheres to Quality, integrity,
        transparency and honesty in each finer aspects to strive for excellence
        and remain committed to ethics in selling.
      </span>
      <br />
      <br />
      <div css={artworks}>
        <div>
          <div css={paperitem}>
            <div style={{ textAlign: "-webkit-center" }}>
              <FaLeaf />
              <br />
              <h4>Latest Technology</h4>
            </div>
            <span>
              Projects we take at PSI are carefully designed and developed by
              considering the emotional wealth of valuing our delicate
              relationship with nature and ourselves.And also where one can feel
              the rhythm of the earth to build their dream home amdist the
              throbbing heartbeats of flora and fauna.
            </span>
          </div>
        </div>
        <div>
          <div css={paperitem}>
            <div style={{ textAlign: "-webkit-center" }}>
              <FaBuilding />
              <br />
              <h4>Buildings</h4>
            </div>
            <span>
              Pleasure spaces (India) Pvt Ltd strictly adhere with real estate
              act 2016 (Regulation & development) and the rules made there
              under (RERA) which have been brought into effect from 1st may
              2017. And also where one can feel the rhythm of the earth.
            </span>
          </div>
        </div>
      </div>
    </div>
    <br/>
    <OurProjectsComponant/>
  </Layout>
)

export default IndexPage

const paperitem = css`
  padding: 20px;
  text-align: justify;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  background: #ffff;
  svg {
    display: block;
    font-size: 65px;
    padding: 10px;
    color: #f29700;
    border-radius: 28%;
    box-shadow: 0px 0px 1px 2px rgba(0, 0, 0, 0.2);
  }
`

const artworks = css`
  display: grid;
  grid-template-columns: 6fr 6fr;
  grid-gap: 20px;
  margin-left: -10px;
  @media(max-width:600px){
    display:block;
    margin-left: 0px;
  }
`

const aboutpart = css`
  padding: 10px 140px;
  background: rgb(240, 245, 247);
  img {
    height: 180px;
  }
  span {
    text-align: justify;
  }
  @media(max-width:600px){
    padding:10px 20px;
    text-align: justify;
    :nth-child(2) div{
      padding-top:10px;
    }
  }
`
