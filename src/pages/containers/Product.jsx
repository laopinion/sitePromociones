import React, { Component } from 'react'
import ProductLayout from '../components/Product-layout.jsx'
import Header from '../../header/components/Header.jsx'
import InfoProduct from '../../subproducts/components/Info-product.jsx'
// import Product from '../../subproducts/containers/Product.jsx'
import Footer from '../../footer/containers/Footer.jsx'

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
    const {products, productID} = this.props

    return (
      <ProductLayout>
        <Header products={products} />
        {
          products.map((item, index) => {
            if (item.slug === productID) {
              return <InfoProduct key={index} {...item} />
            }
          })
        }

        {/* {
          products.map((item, index) => {
            if (item.slug === productID) {
              return <Product key={index} subproducts={item.subproducts} />
            }
          })
        } */}
        <Footer />
      </ProductLayout>
    )
  }
}

export default ProductPage
