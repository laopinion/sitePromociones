import React from 'react'
import './products.sass'

const ProductLayout = (props) => {
  return (
    <section id='SubProducts' className='container'>
      <div className='header'>
        <h2 className='title'>Producto destacados</h2>
        <hr />
      </div>
      {props.children}
    </section>
  )
}

export default ProductLayout
