import React, { Component } from 'react'
import HomeLayout from '../components/Home-layout.jsx'
import Header from '../../header/components/Header.jsx'
import Slides from '../../slides/containers/Slides.jsx'
import Products from '../../products/containers/Products.jsx'
import Footer from '../../footer/containers/Footer.jsx'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modalVisible: false
    }
  }

  render () {
    return (
      <HomeLayout>
        <Header products={this.props.products} />
        <Slides />
        <Products products={this.props.products} />
        <Footer />
      </HomeLayout>
    )
  }
}

export default Home
