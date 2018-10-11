import React, { Component } from 'react'
import ProductsLayout from '../components/Products-layout.jsx'
import Header from '../../header/components/Header.jsx'
import Footer from '../../footer/containers/Footer.jsx'
import GridProducts from '../../products/components/GridProducts'

class ProductPage extends Component {
  constructor (props) {
    super(props)
    // const $app = document.getElementById('app')
    // const id = $app.dataset.product_id
    this.state = {
      modalVisible: false
      // product_id: id
    }
  }

  render () {
    const {products} = this.props

    return (
      <ProductsLayout>
        <Header products={products} />
        <GridProducts products={products} />
        <Footer />
      </ProductsLayout>
    )
  }
}

export default ProductPage
