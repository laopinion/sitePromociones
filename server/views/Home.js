import React, { Component } from 'react'
import Layout from './layouts/default'

class Home extends Component {
  render () {
    return (
      <Layout title='Promociones - La opinión' page='home' isDeveloping={this.props.isDeveloping}>
        <section id='app' />
      </Layout>
    )
  }
}

export default Home
// module.exports = Home;
