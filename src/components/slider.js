import React from "react"
import AwesomeSlider from "react-awesome-slider"
import withAutoplay from "react-awesome-slider/dist/autoplay"
import "react-awesome-slider/dist/styles.css"
import FirstSliderImage from "../images/slider1.jpg"
import SecondSliderImage from "../images/slider3.jpg"
import ThirdSliderImage from "../images/slider1.jpg"
import { css } from "@emotion/core"
import HighLightFormComponant from "../components/highlighipart"

const AutoplaySlider = withAutoplay(AwesomeSlider)

const Slider = () => {
  return (
    <div >
      <div css={main}>
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false}
          interval={4000}
          css={autoslide}
        >
          <div data-src={FirstSliderImage} alt="First Slider Image" />
          <div data-src={SecondSliderImage} alt="Second Slider Image" />
          <div data-src={ThirdSliderImage} alt="Third Slider Image" />
        </AutoplaySlider>
      </div>
      <div css={aftermain}>
        <HighLightFormComponant/>
      </div>
    </div>
  )
}

export default Slider

const aftermain = css`
 position: absolute;
 top:28%;
 z-index:10;
 width:100%;
 padding:0px 30px;
`

const main = css`
  padding-top: 115px;
  position:relative;
  @media (max-width: 600px) {
    padding-top: 10px;
  }
`

const autoslide = css`
  height: 70vh;
  @media (max-width: 600px) {
    height: 60vh;
  }
`
