import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hex }) => {
  const [alert, setalert] = useState(false);
  const bcg = rgb.join(',');
  return (
    <article className="color" style={{ backgroundColor: `rgb(${bcg})` }}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{rgbToHex(...rgb)}</p>
    </article>
  )
}

export default SingleColor
