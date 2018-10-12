import React from 'react'
import Recaptcha from 'react-google-invisible-recaptcha'
import Preloader from '../components/Preloader.jsx'

const FormFooter = (props) => {
  const style = {
    display: props.preloader ? 'none' : 'block'
  }
  return (
    <form id='formContactenos' onSubmit={props.handleSubscription}>
      {
        props.preloader ? (
          <Preloader />
        ) : null
      }
      <div className='formsInput' style={style}>
        <p className='title'>Suscríbete y recibe las últimas promociones</p>
        <div className='form'>
          <input type='text' name='firstName' required ref={props.setRefName} />
          <label htmlFor='Nombre'>Nombre</label>
        </div>
        <div className='form'>
          <input type='text' name='lastName' ref={props.setRefLastname} />
          <label htmlFor='Apellido'>Apellido</label>
        </div>
        <div className='form'>
          <input type='email' name='email' required ref={props.setRefEmail} />
          <label htmlFor='Correo'>Correo</label>
        </div>
        <div className='form'>
          <button id='enviar' className='enviar' type='submit'>Enviar</button>
        </div>
        <div className='terminos'>
          <input type='checkbox' name='terminos' value='Acepto los términos y condiciones y he leído la política de tratamiento de los datos personales' id='terminos' required />
          <label htmlFor='terminos'>Acepto los términos y condiciones y he leído la política de tratamiento de los datos personales</label>
        </div>
        {/* <div
          className='g-recaptcha'
          data-sitekey='6LdZo3QUAAAAAIfCQ2TlGZpm5zQmJQ9jXJKkITdw'
          data-size='invisible'
        /> */}
        <Recaptcha
          ref={props.SetRefRecaptcha}
          sitekey='6LdZo3QUAAAAAIfCQ2TlGZpm5zQmJQ9jXJKkITdw'
          onResolved={props.onResolved} />
        <p className='messageRequest'>
          {
            props.message
          }
        </p>
      </div>
    </form>
  )
}

export default FormFooter
