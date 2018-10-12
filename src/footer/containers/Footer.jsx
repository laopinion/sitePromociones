import React, { Component } from 'react'
import FooterLayout from '../components/Footer-layout.jsx'
import FormFooter from '../components/Form-footer.jsx'

class Footer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      preloader: false,
      status: 0,
      message: '',
      token: null
    }
  }

  handleSubscription = (event) => {
    event.preventDefault()

    this.recaptcha.execute()

    this.setState((prevState) => ({
      preloader: !prevState.preloader
    }))
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

  SetRefRecaptcha = (element) => {
    this.recaptcha = element
  }

  onResolved = () => {
    // alert('Recaptcha resolved with response: ' + this.recaptcha.getResponse())
    this.setState({
      token: this.recaptcha.getResponse()
    })
    // console.log(this.recaptcha.getResponse())
    // console.log(this.state.token)
    fetch(`${this.path}/subscription-email`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.email.value,
        firstName: this.name.value,
        lastName: this.lastname.value,
        token: this.state.token
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

  componentDidMount () {
    this.path = window.location.origin
  }

  render () {
    return (
      <FooterLayout>
        {
          this.state.status === 200 || this.state.status === 500 ? (
            <p className='message'>{this.state.message}</p>
          ) : (
            <FormFooter
              setRefName={this.setInputName}
              setRefLastname={this.setRefLastname}
              setRefEmail={this.setRefEmail}
              handleSubscription={this.handleSubscription}
              message={this.state.message}
              SetRefRecaptcha={this.SetRefRecaptcha}
              onResolved={this.onResolved}
              preloader={this.state.preloader}
            />
          )
        }
      </FooterLayout>
    )
  }
}

export default Footer
