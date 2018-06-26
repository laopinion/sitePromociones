import React from 'react'

const ProductDestacado = (props) => {
  return (
    <section className='product container'>
      <figure>
        <img src={props.src} alt={props.title} />
      </figure>
      <h3>{props.title}</h3>
    </section>
  )
}

export default ProductDestacado
