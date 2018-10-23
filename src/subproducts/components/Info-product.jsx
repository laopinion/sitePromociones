import React from 'react'
import './info.sass'

const SlideProduct = (props) => {
  const {slide, title, description} = props
  return (
    <section id='SlideProduct'>
      <figure>
        <img src={slide} alt={title} />
      </figure>

      <article className='container'>
        <div className='title'>
          <h2>{title}</h2>
        </div>
        <div className='info'>
          <p>{description}</p>
        </div>

        <button className='btn_buy'>
          <a href={`/payu`}>Comprar</a>
        </button>
      </article>
    </section>
  )
}

export default SlideProduct
