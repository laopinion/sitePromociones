import React, { Component } from 'react'
import Layout from './layouts/default'

class ListProducts extends Component {
  render () {
    return (
      <Layout title={`Productos`} page='products' isDeveloping={this.props.isDeveloping}>
        {/* {this.props.id} */}
        <section id='app' />
      </Layout>
    )
  }
}

export default ListProducts
