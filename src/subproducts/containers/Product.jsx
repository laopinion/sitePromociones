import React, { Component } from 'react'
import GridSubProducts from '../components/GridSubProducts'

class Products extends Component {
  constructor (props) {
    super(props)
    this.state = {
      initial: 0
    }
  }

  render () {
    const {subproducts} = this.props
    return (
      <GridSubProducts subproducts={subproducts} />
    )
  }
}

export default Products
