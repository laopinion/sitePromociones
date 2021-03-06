import React, { Component } from 'react'
import GridProducts from '../components/GridProducts'

class Products extends Component {
  constructor (props) {
    super(props)
    this.state = {
      initial: 0
    }
  }

  render () {
    const { products } = this.props
    return (
      <GridProducts products={products} />
    )
  }
}

export default Products
