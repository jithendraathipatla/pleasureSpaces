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
        <div
          key={i}
          onClick={() => setisOpen(true)}
        >
          <Image fluid={item.image} alt={item.name} />
          <span>{item.name}</span>
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
  grid-gap: 20px;
  div {
    height: 250px;
    border: 1px solid #eee;
    :hover {
      cursor: pointer;
    }
  }
`
