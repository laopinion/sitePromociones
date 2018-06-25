import React, { Component } from 'react'
import FooterLayout from '../components/Footer-layout.jsx'
import FormFooter from '../components/Form-footer.jsx'

class Footer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      initial: 0
    }
  }

  render () {
    return (
      <FooterLayout>
        <FormFooter />
      </FooterLayout>
    )
  }
}

export default Footer
