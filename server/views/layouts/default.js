import React, { Component } from 'react'

// acá definimos el layout de nuestro HTML donde están los tags html, head, body, etc.
class Layout extends Component {
  render () {
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

          <title>{`${this.props.title} - La opinión`}</title>
          <link rel='stylesheet' href={`/css/${this.props.page}.css`} />
          {/* <script src='https://www.google.com/recaptcha/api.js' async defer /> */}
        </head>
        <body>
          {this.props.children}
          {
            !this.props.isDeveloping &&
              <script src='/js/vendor_app.js' />
          }
          <script src={`/js/${this.props.page}.js`} />
        </body>
      </html>
    )
  }
}

export default Layout
