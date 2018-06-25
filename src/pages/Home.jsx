import React, { Component } from 'react'
import HomeLayout from './components/Home-layout.jsx'
import Header from './components/Header.jsx'
import Slides from './containers/Slides.jsx'
import Products from './containers/Products.jsx'

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
        <Header />
        <Slides />
        <Products />
      </HomeLayout>
    )
  }
}

export default Home
