import React,{useState, useEffect} from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"
import { css } from "@emotion/core"
import { FaCheckCircle, FaLeaf, FaBoxes } from "react-icons/fa"
import LightBoxComponant from "../components/lightbox"
import PSIOliverImage from '../../data/images/psi-oliver.jpg'
import Titlecomponant from '../components/title'

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  }
`

const ProjectsPage = ({ data }) => {
  const Projects = data.projectsJson
  const [imagestate, setimagestate] = useState([])
  const [state, setstate] = useState([
    {
      name:"1224 SqFt",
      image: Projects.image.childImageSharp.fluid,
      },
      {
       name:"1277 SqFt",
       image: Projects.image.childImageSharp.fluid
      },
  ])
  useEffect(()=>{
    switch (Projects.title) {
      case "PSI Oliver":
        setimagestate([PSIOliverImage,PSIOliverImage]);
        break;
      default:
        break;
    }
  },[])


  return (
    <Layout>
      <div css={main}>
        <Image
          fluid={Projects.image.childImageSharp.fluid}
          alt={Projects.title}
        />
        <h1>
          {Projects.title}
          <br />
          <span>Welcome to {Projects.title}</span>
        </h1>
      </div>
      <br />
      <div css={aftermain}>
        <div css={header}>
          <Titlecomponant title={`Highlights of ${Projects.title}`}/>
          <span>{Projects.description}</span>
        </div>
        <br />
        <div css={fewcards}>
          <div>
            <FaCheckCircle />
            <h4>Best Quality</h4>
          </div>
          <div>
            <FaLeaf />
            <h4>Latest Design</h4>
          </div>
          <div>
            <FaBoxes />
            <h4>Superior Infrastructure</h4>
          </div>
        </div>
        <br />
        <br />
        <hr/>
        <div css={gallerypart}>
          <Titlecomponant title={`${Projects.title} Gallery`}/>
          <LightBoxComponant images={imagestate} state={state}/>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectsPage

const gallerypart = css`
  h2{
    text-align: center;
  }
`

const header = css`
  text-align: justify;
  h2 {
    text-align: center;
  }
  span {
    letter-spacing: 0.5;
  }
`

const fewcards = css`
 display: grid;
 grid-template-columns: 4fr 4fr 4fr;
 grid-gap: 30px;
 div{
   text-align: center;
   display: flex;
   padding: 20px;
   text-align: justify;
   box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
   background: #ffff;
   h4{
     padding-left:30px;
     padding-top:20px;
   }
   svg{
    display: block;
    font-size: 65px;
    padding: 10px;
    color: #f29700;
    border-radius: 28%;
    box-shadow: 0px 0px 1px 2px rgba(0,0,0,0.2);
 }

`

const aftermain = css`
  padding: 0px 140px;
`
const main = css`
  text-align: center;
  img {
    position: relative;
  }
  h1 {
    position: absolute;
    top: 45%;
    margin-left: 37.5%;
    animation: fadeInUp 300ms linear 300ms both;
    color: #fff;
    text-shadow: 0 3px 0 #000;
    background: #ff00ffc7;
    padding: 20px 50px;
    border-radius: 15px;
  }
  span {
    font-size: 20px;
    letttter-spacing: 1.3px;
  }
`
