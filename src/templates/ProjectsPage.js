import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"
import { css } from "@emotion/core"
import { FaCheckCircle, FaLeaf, FaBoxes } from "react-icons/fa"
import LightBoxComponant from "../components/lightbox"
import PSIOliverImage from "../../data/images/psi-oliver.jpg"
import PSIOliverImage1 from "../../data/images/archwayfuturewall.jpg"
import PSIOliverImage2 from "../../data/images/clubhouse.jpg"
import PSIOliverImage3 from "../../data/images/clubhouseandpark.jpg"
import PSIOliverImage4 from "../../data/images/clubhousefirstfloor.jpg"
import PSIOliverImage5 from "../../data/images/clubhousepool.jpg"
import PSIOliverImage6 from "../../data/images/clubhousesecondfloor.jpg"
import PSIOliverImage7 from "../../data/images/compoundwall.jpg"
import PSIOliverImage8 from "../../data/images/grocerystore.jpg"
import Titlecomponant from "../components/title"

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
      masterplanImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      galleryOne {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }

      gallerytwo {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }

      gallerythree {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      galleryfour {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      galleryfive {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }

      gallerysix {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      galleryseven {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      galleryeight {
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
      name: "Entrance",
      image: Projects.image.childImageSharp.fluid,
    },
    {
      name: "Arch Way",
      image: Projects.galleryOne.childImageSharp.fluid,
    },
    {
      name: "Club House",
      image: Projects.gallerytwo.childImageSharp.fluid,
    },
    {
      name: "Club House and Park",
      image: Projects.gallerythree.childImageSharp.fluid,
    },
    {
      name: "Club House First Floor",
      image: Projects.galleryfour.childImageSharp.fluid,
    },
    {
      name: "Clubhouse Pool",
      image: Projects.galleryfive.childImageSharp.fluid,
    },
    {
      name: "Club House Second Floor",
      image: Projects.gallerysix.childImageSharp.fluid,
    },
    {
      name: "Compound Wall",
      image: Projects.galleryseven.childImageSharp.fluid,
    },
    {
      name: "Grocery Store",
      image: Projects.galleryeight.childImageSharp.fluid,
    },
  ])
  useEffect(() => {
    switch (Projects.title) {
      case "PSI Oliver":
        setimagestate([PSIOliverImage, PSIOliverImage1, PSIOliverImage2, PSIOliverImage3,PSIOliverImage4, PSIOliverImage5, PSIOliverImage6, PSIOliverImage7, PSIOliverImage8])
        break
      default:
        break
    }
  }, [])

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
          <Titlecomponant title={`Highlights of ${Projects.title}`} />
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
        <hr />
        <div css={gallerypart}>
          <Titlecomponant title={`${Projects.title} Gallery`} />
          <LightBoxComponant images={imagestate} state={state} />
        </div>
        <br />
        <br />
        <br />
        <hr />
        <div>
          <Titlecomponant title={`${Projects.title} Master Plan`} />
          <Image
            fluid={Projects.masterplanImage.childImageSharp.fluid}
            alt={Projects.title}
          />
        </div>
        <hr />
      </div>
    </Layout>
  )
}

export default ProjectsPage

const gallerypart = css`
  h2 {
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
    font-size: 20px;
    line-height: 32px;
    font-weight: 400;
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
     letter-spacing:0.3px;
     text-shadow: 0 0px 1px #000;
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
    background:#252425c7;
    padding: 20px 50px;
    border-radius: 15px;
    letter-spacing:0.9px;
  }
  span {
    font-size: 20px;
    letttter-spacing: 1.3px;
  }
`
