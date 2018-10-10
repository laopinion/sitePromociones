import React, { Component } from 'react'
import ProductLayout from '../components/Product-layout.jsx'
import ProductDestacado from '../components/Procuct-destacado.jsx'

class Products extends Component {
  constructor (props) {
    super(props)
    this.state = {
      initial: 0
    }
  }

  render () {
    return (
      <ProductLayout>
        {
          this.props.subproducts.map((item, index) => {
            return <ProductDestacado key={index} {...item} />
          })
        }
      </ProductLayout>
    )
  }
}

export default Products
