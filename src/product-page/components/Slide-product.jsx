import React from 'react'
import './slide.sass'

const SlideProduct = (props) => {
  return (
    <section id='SlideProduct'>
      <img src={props.slide} alt={props.title} />
    </section>
  )
}

export default SlideProduct
