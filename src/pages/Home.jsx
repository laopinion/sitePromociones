import React, { Component } from 'react'
import HomeLayout from './components/Home-layout.jsx'
import Header from './components/Header.jsx'

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
      </HomeLayout>
    )
  }
}

export default Home
