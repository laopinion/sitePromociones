import React, { Fragment, Component } from 'react'
import './info.sass'

class SlideProduct extends Component {
  constructor (props) {
    super(props)

    const { price } = this.props

    this.state = {
      accountId: '564188',
      merchantId: '561677',
      currency: 'COP',
      amount: price,
      url: 'https://gateway.payulatam.com/ppp-web-gateway',
      responUrl: 'https://promociones.laopinion.com.co',
      value: 'normal',
      signature: 0,
      referenceCode: 0,
      name: '',
      lastName: '',
      shippingCity: 'Cúcuta',
      shippingAddress: 'No aplica domicilio'
    }
    // $accountId = "564188";//cambiar por los de produccion
    // const accountId = '806287'// cambiar por los de produccion
    // const merchantId = '561677'// cambiar por los de produccion
    // const currency = 'COP'
    // const amount = '0'
    // const url = 'https://gateway.payulatam.com/ppp-web-gateway'// Production
    // // $url = "https://sandbox.gateway.payulatam.com/ppp-web-gateway/";// Test
    // const responUrl = 'https://clasificados.laopinion.com.co/'// Ruta de respuesta
    this.signature(price)
  }

  handleChange = (event) => {
    // console.log(event.target.value)
    const { price, priceDomicilio } = this.props

    if (event.target.value === 'normal') {
      this.setState({
        amount: price,
        shippingAddress: 'No aplica domicilio'
      })
      this.signature(price)
    } else {
      this.setState({
        amount: priceDomicilio
      })
      this.signature(priceDomicilio)
    }

    this.setState({value: event.target.value})
  }

  handleInputChange = (event) => {
    const target = event.target
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  signature = (amount) => {
    let nuevoAmount = amount
    const domain = window.location.origin

    const url = `${domain}/signature`
    var data = { amount: nuevoAmount }

    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => {
        console.log('Success:', response)
        this.setState({
          signature: response.signatureHash,
          referenceCode: response.referenceCode
        })
      })
      .catch(error => console.error('Error en crear la signature: ', error))
  }

  handleChangeCity = (event) => {
    this.setState({shippingCity: event.target.value})
  }

  handleInputAddress = (event) => {
    const target = event.target
    const value = target.value

    this.setState({
      shippingAddress: value
    })
  }

  render () {
    const { slide, title, description, summary, active, special, slug, price, priceDomicilio } = this.props
    // console.log(active)
    const {
      accountId,
      merchantId,
      currency,
      amount,
      url,
      responUrl,
      value,
      signature,
      referenceCode,
      name,
      lastName,
      shippingCity,
      shippingAddress
    } = this.state

    const payerFullName = `${name} ${lastName}`

    return (
      <section id='SlideProduct'>
        <figure>
          <img src={slide} alt={title} />
        </figure>

        <article className='container'>
          <div className='title'>
            <h2>{title}</h2>
            {summary && <h3>{summary}</h3>}
          </div>

          {!special ? (
            <div className='info'>
              {/* <p>{description}</p> */}
              <p dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          ) : (
            <div className='special info'>
              <ul>
                <li>
                  <h2>DESCRIPCIÓN Y FUNCIONALIDAD</h2>
                  <p>
                    Plancha de vapor portátil, vertical, eficiente y fácil de manejar. Incluye cepillo quita pelusas, removible.
                  </p>
                </li>
                <li>
                  <h2>INSTRUCCIONES DE SEGURIDAD</h2>
                  <p>
                    - Cuando el aparato este caliente agárrelo solo por el mango <br /> <br />
                    - Nunca coloque sus manos sobre el vaporizador o sobre las partes metálicas calientes. <br /> <br />
                    - No debe abrir la abertura de llenado del depósito de agua mientras la plancha esté en uso. Quite el
                    enchufe de la toma de corriente y permita que el dispositivo se enfríe por completo. <br /> <br />
                    - Nunca planche la ropa mientras la lleva puesta. <br /> <br />
                  </p>
                </li>
                <li>
                  <h2>DESCRIPCIÓN PARTES DEL PRODUCTO</h2>
                  <p>
                    1. TANQUE DE AGUA <br /> <br />
                    2. CEPILLO DE PELUSA <br /> <br />
                    3. PLIEGUES <br /> <br />
                    4. INTERRUPTOR DE VAPOR <br /> <br />
                    5. INDICADOR <br /> <br />
                  </p>
                </li>
                <li>
                  <img src='/images/plancha.jpg' alt='plancha' />
                </li>
              </ul>

              <p className='domicilio'>En máximo dos días se hará la respectiva entrega del optativo. Aplica para Cúcuta y su área metropolitana.</p>
            </div>
          )}

          {active && (
            <div className='prices'>
              <ul>
                <li>
                  Con domicilio
                  <span>${priceDomicilio}</span>
                </li>
                <li>
                  Sin domicilio
                  <span>${price}</span>
                </li>
              </ul>
            </div>
          )}

          {
            active ? (
              <div id='formulario'>
                <h2>Datos personales</h2>
                <form id='form-anuncio' method='post' action={url}>
                  <input name='merchantId' type='hidden' value={merchantId} />
                  <input name='accountId' type='hidden' value={accountId} />
                  <input
                    id='description'
                    name='description'
                    type='hidden'
                    value={`${title} - ${value === 'normal' ? 'Sin domicilio' : 'Con domicilio'} `}
                  />
                  <input
                    id='referenceCode'
                    name='referenceCode'
                    type='hidden'
                    value={referenceCode}
                  />
                  <input id='amount' name='amount' type='hidden' value={amount} />
                  <input name='tax' type='hidden' value='0' />
                  <input name='taxReturnBase' type='hidden' value='0' />
                  <input name='currency' type='hidden' value={currency} />
                  <input id='signature' name='signature' type='hidden' value={signature} />
                  <input
                    name='test'
                    type='hidden'
                    value='0'
                  /> {/* <!--Dejar en 0 cuando sea produccion--> */}
                  <input type='hidden' name='shippingCountry' value='CO' />
                  <input type='hidden' name='shippingCity' value={shippingCity} />
                  <input type='hidden' name='shippingAddress' value={shippingAddress} />
                  <input name='responseUrl' type='hidden' value={responUrl} />
                  <input
                    id='payerFullName'
                    type='hidden'
                    name='payerFullName'
                    value={payerFullName}
                  />
                  <div className='formulario'>
                    <div className='form-item'>
                      <label htmlFor='nombres'>Nombre</label>
                      <input
                        id='nombres'
                        type='text'
                        name='name'
                        className='form-text'
                        required
                        onChange={this.handleInputChange}
                        value={name}
                      />
                    </div>
                    <div className='form-item'>
                      <label htmlFor='apellidos'>Apellido</label>
                      <input
                        id='apellidos'
                        type='text'
                        name='lastName'
                        className='form-text'
                        onChange={this.handleInputChange}
                        value={lastName}
                      />
                    </div>
                    <div className='form-item'>
                      <label htmlFor='cedula'>Cédula de ciudadanía</label>
                      <input
                        id='cedula'
                        type='text'
                        name='payerDocument'
                        className='form-text'
                        required
                      />
                    </div>
                    <div className='form-item'>
                      <label htmlFor='telefono'>Teléfono (celular)</label>
                      <input
                        type='text'
                        name='mobilePhone'
                        className='form-text'
                        required
                      />
                    </div>
                    <div className='form-item'>
                      <label htmlFor='correo'>Correo electrónico</label>
                      <input
                        type='email'
                        name='buyerEmail'
                        className='form-text'
                        required
                      />
                    </div>
                    <div className='form-item'>
                      <label htmlFor='Precio'>Precio</label>
                      <select value={value} onChange={this.handleChange}>
                        <option value='normal'>Sin domicilio {price} </option>
                        <option value='domicilio'>Con domicilio {priceDomicilio}</option>
                      </select>
                    </div>
                    {value !== 'normal' && (
                      <Fragment>
                        <div className='form-item'>
                          <label htmlFor='Ciudad'>Ciudad</label>
                          <select value={shippingCity} onChange={this.handleChangeCity}>
                            <option value='Cúcuta'>Cúcuta</option>
                            <option value='Los patios'>Los patios</option>
                            <option value='Villa del rosario'>Villa del rosario</option>
                          </select>
                        </div>
                        <div className='form-item'>
                          <label htmlFor='address'>Dirección</label>
                          <input type='text' name='address' className='form-text' required onChange={this.handleInputAddress} />
                        </div>
                      </Fragment>
                    )}
                    <div className='form-item terminos'>
                      <input
                        type='radio'
                        name='terminos'
                        value='Acepta terminos y condiciones'
                        required
                      />
                      <label
                        className='option'
                        htmlFor='edit-submitted-terminos-y-condiciones-de-uso-1'
                      >Acepto los
                        <a
                          href='https://www.laopinion.com.co/terminos-y-condiciones'
                          target='_blank'
                        > términos y condiciones</a> y he leído la
                        <a
                          href='https://www.laopinion.com.co/politica-de-tratamiento-de-datos-personales'
                          target='_blank'
                        > política de tratamiento de los datos personales</a>
                      </label>
                    </div>
                    <div id='btn__submit' className='form-actions waves'>
                      {/* <input
                    className='submit'
                    name='Submit'
                    type='submit'
                    value='Comprar'
                  /> */}
                      <button type='submit' className='submit' name='submit'>Comprar</button>
                    </div>
                  </div>
                </form>
              </div>
            ) : (
              <Fragment>
                <div><p class='no__products'>No disponible en este momento</p><button class='btn_buy inactive'><span>Comprar</span></button></div>
              </Fragment>
            )
          }

        </article>
      </section>
    )
  }
}

export default SlideProduct
