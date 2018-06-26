import React, { Component } from 'react'
import Layout from './layouts/default'

class Product extends Component {
  render () {
    return (
      <Layout title='producto' page='product'>
        {/* {this.props.id} */}
        <section id='app' data-product_id={this.props.id} />
      </Layout>
    )
  }
}

export default Product
