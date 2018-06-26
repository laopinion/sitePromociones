import React from 'react'

const SlideProduct = (props) => {
  return (
    <section id='SlideProduct'>
      <img src={props.slide} alt={props.title} />
    </section>
  )
}

export default SlideProduct
