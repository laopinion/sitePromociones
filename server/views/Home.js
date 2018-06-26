import React, { Component } from 'react'
import Layout from './layouts/default'

class Home extends Component {
  render () {
    return (
      <Layout title='Homepage' page='home'>
        <section id='app' />
      </Layout>
    )
  }
}

export default Home
// module.exports = Home;
