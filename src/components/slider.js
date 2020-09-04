import React from "react"
import AwesomeSlider from "react-awesome-slider"
import withAutoplay from "react-awesome-slider/dist/autoplay"
import "react-awesome-slider/dist/styles.css"
import FirstSliderImage from "../images/slider1.png"
import SecondSliderImage from "../images/slider3.jpg"
import ThirdSliderImage from "../images/slider1.jpg"
import {css} from '@emotion/core'

const AutoplaySlider = withAutoplay(AwesomeSlider)

const Slider = () => {
  return (
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
  )
}

export default Slider

const main = css`
  padding-top:115px;
  @media(max-width:600px){
    padding-top:10px;
  }
`

const autoslide = css`
  height:70vh;
  @media(max-width:600px){
    height:60vh;
  }
`