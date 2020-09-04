import React, { useState } from "react"
import Lightbox from "react-image-lightbox"
import Image from "gatsby-image"
import "react-image-lightbox/style.css"
import { css } from "@emotion/core"

const Lighthouse = props => {
  const images = props.images
  const [state, setstate] = useState(props.state)
  const displayingGallery = () => {
    return state.map((item, i) => {
      return (
        <div key={i} onClick={() => setisOpen(true)} css={cards}>
          <Image fluid={item.image} alt={item.name} />
          <h4>{item.name}</h4>
        </div>
      )
    })
  }
  const [photoIndex, setphotoIndex] = useState(0)
  const [isOpen, setisOpen] = useState(false)
  return (
    <div>
      <div css={imagesingrid}>{displayingGallery()}</div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setisOpen(false)}
          onMovePrevRequest={() =>
            setphotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setphotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  )
}

export default Lighthouse

const imagesingrid = css`
  display: grid;
  grid-template-columns: 4fr 4fr 4fr;
  grid-gap: 65px 20px;
  div {
    height: 230px;
    :hover {
      cursor: pointer;
      transform: translateY(-1px);
      border: 1px solid #eee;
      box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.2)
    }
  }
`

const cards = css`
 border: 1px solid #eeee;
 h4{
     text-align: center;
     border: 1px solid #eee;
    padding: 10px;
    font-size: 16px;
    box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.2);
    background:rgb(240,245,247);
 }
`
