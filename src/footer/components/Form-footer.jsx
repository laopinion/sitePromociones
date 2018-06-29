import React from 'react'

const FormFooter = (props) => {
  return (
    <form id='formContactenos' onSubmit={props.handleSubscription}>
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
        <button className='enviar' type='submit'>Enviar</button>
      </div>
      <div className='terminos'>
        <input type='checkbox' name='terminos' value='Acepto de los terminos' id='terminos' required />
        <label htmlFor='terminos'>Acepto de los terminos</label>
      </div>
    </form>
  )
}
export default FormFooter
