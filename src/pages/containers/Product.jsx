import React, { Component } from 'react'
import ProductLayout from '../components/Product-layout.jsx'
import Header from '../../header/components/Header.jsx'
import SlideProduct from '../../product-page/components/Slide-product.jsx'
import Product from '../../product-page/containers/Product.jsx'
import Footer from '../../footer/containers/Footer.jsx'

class ProductPage extends Component {
  constructor (props) {
    super(props)
    const $app = document.getElementById('app')
    const id = $app.dataset.product_id
    this.state = {
      modalVisible: false,
      product_id: id
    }
  }

  render () {
    return (
      <ProductLayout>
        <Header />
        {
          this.props.products.map((item, index) => {
            if (item.id === this.state.product_id) {
              return <SlideProduct key={index} {...item} />
            }
          })
        }
        {
          this.props.products.map((item, index) => {
            if (item.id === this.state.product_id) {
              return <Product key={index} products={item.subproducts} />
            }
          })
        }
        <Footer />
      </ProductLayout>
    )
  }
}

export default ProductPage
