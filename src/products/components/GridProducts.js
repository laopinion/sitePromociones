import React from 'react'
import ProductsLayout from './Products-layout.jsx'
import Product from '../components/Product.jsx'

const GridProducts = (props) => {
  const { products } = props
  return (
    <ProductsLayout>
      {
        products.map((item, index) => (
          <Product key={index} {...item} />
        ))
      }
    </ProductsLayout>
  )
}

export default GridProducts
