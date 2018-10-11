import React from 'react'
import ProductLayout from './SubProduct-layout'
import ProductDestacado from './SubProduct'

const GridSubProducts = (props) => {
  const {subproducts} = props
  return (
    <ProductLayout>
      {
        subproducts.map((item, index) => (
          <ProductDestacado key={index} {...item} />
        ))
      }
    </ProductLayout>
  )
}

export default GridSubProducts
