import React, { Component } from 'react'
import FooterLayout from '../components/Footer-layout.jsx'
import FormFooter from '../components/Form-footer.jsx'

class Footer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      initial: 0,
      status: 600,
      message: ''
    }
  }

  handleSubscription = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/subscription-email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.email.value,
        firstName: this.name.value,
        lastName: this.lastname.value
      })
    })
      .then((res) => res.json())
      .then((data) => {
        // console.info(data)
        this.setState({
          status: data.status,
          message: data.message
        })
        // document.getElementById('formContactenos').reset()
      })
      .catch((err) => {
        if (err) console.log(`Error ${err}`)
      })
  }

  setInputName = (element) => {
    this.name = element
  }

  setRefLastname = (element) => {
    this.lastname = element
  }

  setRefEmail = (element) => {
    this.email = element
  }

  render () {
    return (
      <FooterLayout>
        {
          this.state.status === 200 || this.state.status === 400 || this.state.status === 500 ? (
            <p className='message'>{this.state.message}</p>
          ) : (
            <FormFooter
              setRefName={this.setInputName}
              setRefLastname={this.setRefLastname}
              setRefEmail={this.setRefEmail}
              handleSubscription={this.handleSubscription}
            />
          )
        }
      </FooterLayout>
    )
  }
}

export default Footer
