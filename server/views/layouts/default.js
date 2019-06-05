import React, { Component } from 'react'
import Script from './Script'

const Scripts = (props) => (
  <React.Fragment>
    <script src='/js/runtime.js' />
    <script src='/js/npm.react-dom.js' />
    <script src='/js/npm.style-loader.js' />
    <script src='/js/npm.fbjs.js' />
    <script src='/js/npm.react-google-invisible-recaptcha.js' />
    <script src='/js/npm.react.js' />
    <script src='/js/npm.uuid.js' />
    <script src='/js/npm.prop-types.js' />
    <script src='/js/npm.css-loader.js' />
    <script src='/js/npm.object-assign.js' />
    <script src='/js/home~product~products.js' />
    <script src='/js/home~products.js' />
    <link rel='stylesheet' href='/css/home~product~products.css' />
    <link rel='stylesheet' href='/css/home~products.css' />
    <script src={`/js/${props.page}.js`} />
    <link rel='stylesheet' href={`/css/${props.page}.css`} />
  </React.Fragment>
)

// acá definimos el layout de nuestro HTML donde están los tags html, head, body, etc.
class Layout extends Component {
  render () {
    // console.log('ok todo bien')
    return (
      <html lang='es'>
        <head>
          <meta charSet='UTF-8' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
          />

          <link rel='shortcut icon' type='image/x-icon' href='/favicon/favicon.ico' />
          <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
          <link rel='manifest' href='/favicon/site.webmanifest' />
          <link rel='mask-icon' href='/favicon/safari-pinned-tab.svg' color='#5bbad5' />
          <meta name='msapplication-TileColor' content='#da532c' />
          <meta name='theme-color' content='#ffffff' />
          {/* Se agrego un cambio al title */}
          <title>{`${this.props.title} - La opinión`}</title>
        </head>
        <body>
          {this.props.children}

          {
            !this.props.isDeveloping && (
              <Scripts page={this.props.page} />
            )
          }

          <script async src='https://www.googletagmanager.com/gtag/js?id=UA-141172940-1' />
          <Script>
            {
              () => {
                window.dataLayer = window.dataLayer || []
                function gtag () { dataLayer.push(arguments) }
                gtag('js', new Date())

                gtag('config', 'UA-141172940-1')
              }
            }
          </Script>
        </body>
      </html>
    )
  }
}

export default Layout
