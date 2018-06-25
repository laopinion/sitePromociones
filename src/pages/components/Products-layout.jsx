import React from 'react'
import './products.sass'

const ProductsLayout = (props) => {
  return (
    <section id='Products' className='container'>
      <div className='header'>
        <h2 className='title'>Productos destacados</h2>
        <hr />
      </div>
      {props.children}
    </section>
  )
}

export default ProductsLayout
