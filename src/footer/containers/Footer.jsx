import React, { Component } from 'react'
import FooterLayout from '../components/Footer-layout.jsx'
import FormFooter from '../components/Form-footer.jsx'
import Preloader from '../components/Preloader.jsx'

class Footer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      preloader: false,
      status: 0,
      message: ''
    }
  }

  handleSubscription = (event) => {
    event.preventDefault()
    this.setState({
      preloader: true
    })
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
          message: data.message,
          preloader: false
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
          this.state.preloader ? (
            <Preloader />
          ) : (
            this.state.status === 200 || this.state.status === 500 ? (
              <p className='message'>{this.state.message}</p>
            ) : (
              <FormFooter
                setRefName={this.setInputName}
                setRefLastname={this.setRefLastname}
                setRefEmail={this.setRefEmail}
                handleSubscription={this.handleSubscription}
                message={this.state.message}
              />
            )
          )
        }
      </FooterLayout>
    )
  }
}

export default Footer
