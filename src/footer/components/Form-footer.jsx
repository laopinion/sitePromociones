import React from 'react'

const FormFooter = (props) => {
  return (
    <form id='formContactenos'>
      <div className='form'>
        <input type='text' name='name' />
        <label htmlFor='Nombre'>Nombre</label>
      </div>
      <div className='form'>
        <input type='text' name='apellido' />
        <label htmlFor='Apellido'>Apellido</label>
      </div>
      <div className='form'>
        <input type='email' name='email' />
        <label htmlFor='Correo'>Correo</label>
      </div>
      <div className='form'>
        <button className='enviar'>Enviar</button>
      </div>
      <div className='terminos'>
        <input type='checkbox' name='terminos' value='Acepto de los terminos' id='terminos' />
        <label htmlFor='terminos'>Acepto de los terminos</label>
      </div>
    </form>
  )
}
export default FormFooter
