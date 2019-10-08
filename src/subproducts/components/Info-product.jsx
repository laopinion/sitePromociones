import React from 'react'
import './info.sass'

const SlideProduct = (props) => {
  const { slide, title, description, active, special } = props
  // console.log(active)
  return (
    <section id='SlideProduct'>
      <figure>
        <img src={slide} alt={title} />
      </figure>

      <article className='container'>
        <div className='title'>
          <h2>{title}</h2>
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

        {
          active ? (
            <div className='btn_payu'>
              {props.slug === 'picatodo' ? (
                <form method='post' action='https://gateway.payulatam.com/ppp-web-gateway/pb.zul' acceptCharset='UTF-8'>
                  <input type='image' border='0' alt='' src='https://promociones.laopinion.com.co/images/boton_pago.jpg' onClick='this.form.urlOrigen.value = window.location.href;' />
                  <input name='buttonId' type='hidden' value='D8XeBFCtYQ6AlTjy2A20MwKqdg1EWeLaNlyrV9OhxBR2F0wKA9IWdA==' />
                  <input name='merchantId' type='hidden' value='561677' />
                  <input name='accountId' type='hidden' value='564188' />
                  <input name='description' type='hidden' value='Picatodo Home Elements' />
                  <input name='referenceCode' type='hidden' value='Picatodo' />
                  <input name='amount' type='hidden' value='45500.00' />
                  <input name='tax' type='hidden' value='0.00' />
                  <input name='taxReturnBase' type='hidden' value='0.00' />
                  <input name='currency' type='hidden' value='COP' />
                  <input name='lng' type='hidden' value='es' />
                  <input name='paymentMethods' type='hidden' value='EFECTY,BALOTO,OTHERS_CASH,PSE,BANK_REFERENCED' />
                  <input name='displayBuyerComments' type='hidden' value='true' />
                  <input name='sourceUrl' id='urlOrigen' value='' type='hidden' />
                  <input name='buttonType' value='SIMPLE' type='hidden' />
                  <input name='signature' value='4824d1d46eed9f1a99c41a084ce1462147cdc9aafff0adc82e3e6c09434ac3a7' type='hidden' />
                </form>
              ) : (
                <form method='post' action='https://gateway.payulatam.com/ppp-web-gateway/pb.zul' acceptCharset='UTF-8'>
                  <input type='image' border='0' alt='' src='https://promociones.laopinion.com.co/images/boton_pago.jpg' onClick='this.form.urlOrigen.value = window.location.href;' />
                  <input name='buttonId' type='hidden' value='Tx7rpEEY/NxqPPtNxhyUlvd+zCVqZyb+af0mdWKbHKEUm7ysjRo+zg==' />
                  <input name='merchantId' type='hidden' value='561677' />
                  <input name='accountId' type='hidden' value='564188' />
                  <input name='description' type='hidden' value='Sandwichera Home Elements' />
                  <input name='referenceCode' type='hidden' value='Sandwichera' />
                  <input name='amount' type='hidden' value='44500.00' />
                  <input name='tax' type='hidden' value='0.00' />
                  <input name='taxReturnBase' type='hidden' value='0.00' />
                  <input name='currency' type='hidden' value='COP' />
                  <input name='lng' type='hidden' value='es' />
                  <input name='paymentMethods' type='hidden' value='EFECTY,BALOTO,OTHERS_CASH,PSE,BANK_REFERENCED' />
                  <input name='displayBuyerComments' type='hidden' value='true' />
                  <input name='sourceUrl' id='urlOrigen' value='' type='hidden' />
                  <input name='buttonType' value='SIMPLE' type='hidden' />
                  <input name='signature' value='85cd75affc4cfc9483f59511a932890491574e201e6115ee3235e2173a7df3bd' type='hidden' />
                </form>
              )}
            </div>
          ) : (
            <div>
              <p className='no__products'>No disponible en este momento</p>
              <button className='btn_buy inactive'>
                <span>Comprar</span>
              </button>
            </div>
          )
        }

      </article>
    </section>
  )
}

export default SlideProduct
