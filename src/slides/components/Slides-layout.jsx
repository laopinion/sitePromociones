import React from 'react'
import './slides.sass'

const SlidesLayout = (props) => {
  return (
    <section className='SlidesLayout'>
      {props.children}
    </section>
  )
}

export default SlidesLayout
