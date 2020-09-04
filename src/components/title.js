import React from 'react'
import {css} from '@emotion/core'

const Title = (props) => {
    return(
        <div css={title}>
         <h3>{props.title}</h3>
        </div>
    )
}

export default Title;

const title = css`
  h3{
      color: orange;
      font-size: 30px;
      margin-top: 0;
      margin-bottom: 20px;
      letter-spacing: 0.5px;
  }
`