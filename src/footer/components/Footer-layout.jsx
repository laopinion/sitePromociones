import React from 'react'
import './footer.sass'
import tel from '../../img/tel.png'
import telMovil from '../../img/movil/tel.png'
import deleitese from '../../img/deleitese.png'
import op from '../../img/opinion.png'
import qhubo from '../../img/qhubo.png'
import logoOp from '../../img/opcom.png'

const FooterLayout = (props) => {
  const { ano } = props
  return (
    <footer id='Footer'>
      <section className='footer container'>
        <div className='header'>
          <h2 className='title'>Contácto</h2>
          <hr />
        </div>
        <div className='contactenos'>
          {props.children}
          <div className='telefonos_logos'>
            <div className='row-1'>
              <figure>
                <img className='desktop' src={tel} alt='Teléfonos' />
                <img className='movil' src={telMovil} alt='Teléfonos' />
              </figure>
              <p>Para saber más acerca de nuestros productos y promocionales llámanos a nuestra línea de atención al cliente.</p>
            </div>
            <div className='row-2'>
              <h4>Visita también</h4>
              <figure className='logos'>
                <a href='http://deleitese.co' target='_blank'>
                  <img src={deleitese} alt='deleitese' />
                </a>
                <a href='https://laopinion.com.co' target='_blank'>
                  <img src={op} alt='La Opinión' />
                </a>
                <a href='https://www.instagram.com/qhubocucuta' target='_blank'>
                  <img src={qhubo} alt='Qhubo' />
                </a>
              </figure>
            </div>
          </div>
        </div>
        <div className='info'>
          <figure>
            <img src={logoOp} alt='laopinion.com.co' />
          </figure>
          <hr />
          <p>DIARIO LA OPINIÓN - Av. 4 Nro. 16 - 12. Teléfono 09 7 5829999 - Fax 09 7 5717859 - Cúcuta - Colombia
              Copyright   2001 - {ano} La Opinión S.A. - Todos los Derechos Reservados
              Reservados todos los derechos; queda prohibida la reproducción, distribución,  comunicación. Incluida en particular su mera reproducción y/o puesta a disposición como resúmenes, reseñas o revistas de prensa con fines comerciales e indirectamente lucrativos, a lo que se manifiesta oposición rotunda.
          </p>
          <hr />
          <div className='redes'>
            <h4>Síganos</h4>
            <ul>
              <li className='facebook'>
                <a href='https://www.facebook.com/laopinioncucuta/' target='_blank' />
              </li>
              <li className='twitter'>
                <a href='https://www.twitter.com/laopinioncucuta/' target='_blank' />
              </li>
              <li className='instagram'>
                <a href='https://www.instagram.com/laopinioncucuta/' target='_blank' />
              </li>
              <li className='youtube'>
                <a href='https://www.youtube.com/user/WEBLAOPINION' target='_blank' />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  )
}
export default FooterLayout
