import React from 'react'

const ProductDestacado = (props) => {
  return (
    <section className='product'>
      <figure>
        <img src={props.src} alt={props.title} />
      </figure>
      <h3>{props.title}</h3>
      <div className='btns'>
        <button className='buy btn'>Comprar</button>
        <button className='car btn'>Añadir al carrito <i className='icon' /> </button>
      </div>
    </section>
  )
}

export default ProductDestacado
