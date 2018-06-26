import React, { Component } from 'react'
import ProductsLayout from '../components/Products-layout.jsx'
import Product from '../components/Product.jsx'

class Products extends Component {
  constructor (props) {
    super(props)
    this.state = {
      initial: 0
    }
  }

  render () {
    return (
      <ProductsLayout>
        {
          this.props.products.map((item, index) => {
            return <Product key={index} {...item} />
          })
        }
      </ProductsLayout>
    )
  }
}

export default Products