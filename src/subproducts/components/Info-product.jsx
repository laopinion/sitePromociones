import React, {Fragment} from 'react'
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
            <div className='btns'>
              <div className='btn_payu'>
                <p><span>$85.500</span> Sin domicilio</p>
                <form method='post' action='https://gateway.payulatam.com/ppp-web-gateway/pb.zul' accept-charset='UTF-8'>
                  <input type='image' border='0' alt='' src='https://promociones.laopinion.com.co/images/btn_pago.jpg' onClick='this.form.urlOrigen.value = window.location.href;' />
                  <input name='buttonId' type='hidden' value='q96wC9KGkfpdp6RjRqNOtxAF4bTky33BNDQGMsVRcbhEgz4agCCI0g==' />
                  <input name='merchantId' type='hidden' value='561677' />
                  <input name='accountId' type='hidden' value='564188' />
                  <input name='description' type='hidden' value='Plancha de vapor vertical' />
                  <input name='referenceCode' type='hidden' value='Plancha a vapor' />
                  <input name='amount' type='hidden' value='85500.00' />
                  <input name='tax' type='hidden' value='0.00' />
                  <input name='taxReturnBase' type='hidden' value='0.00' />
                  <input name='currency' type='hidden' value='COP' />
                  <input name='lng' type='hidden' value='es' />
                  <input name='displayBuyerComments' type='hidden' value='true' />
                  <input name='sourceUrl' id='urlOrigen' value='' type='hidden' />
                  <input name='buttonType' value='SIMPLE' type='hidden' />
                  <input name='signature' value='d63945bea1a5b04254738b608b22e7b55d60ff8d99657014aa935171eb23e1fd' type='hidden' />
                </form>
              </div>
              <div className='btn_payu'>
                <p><span>$91.500</span> Con domicilio</p>
                <form method='post' action='https://gateway.payulatam.com/ppp-web-gateway/pb.zul' accept-charset='UTF-8'>
                  <input type='image' border='0' alt='' src='https://promociones.laopinion.com.co/images/btn_pago.jpg' onClick='this.form.urlOrigen.value = window.location.href;' />
                  <input name='buttonId' type='hidden' value='o3QnHsc3a1yOVNj+ff48/Q72RC+OnPHtry1x9eXnSvBW8mK56rPggg==' />
                  <input name='merchantId' type='hidden' value='561677' />
                  <input name='accountId' type='hidden' value='564188' />
                  <input name='description' type='hidden' value='Plancha de vapor_domicilio' />
                  <input name='referenceCode' type='hidden' value='Plancha a vapor' />
                  <input name='amount' type='hidden' value='91500.00' />
                  <input name='tax' type='hidden' value='0.00' />
                  <input name='taxReturnBase' type='hidden' value='0.00' />
                  <input name='shipmentValue' value='0.00' type='hidden' />
                  <input name='currency' type='hidden' value='COP' />
                  <input name='lng' type='hidden' value='es' />
                  <input name='displayBuyerComments' type='hidden' value='true' />
                  <input name='sourceUrl' id='urlOrigen' value='' type='hidden' />
                  <input name='buttonType' value='SIMPLE' type='hidden' />
                  <input name='signature' value='bc694fe926437893834f0baccfaa83350da4f7356989ce6d0685cc9e400a8f16' type='hidden' />
                </form>
              </div>
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
