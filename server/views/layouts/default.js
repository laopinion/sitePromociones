import React, { Component } from 'react'

// acá definimos el layout de nuestro HTML donde están los tags html, head, body, etc.
class Layout extends Component {
  componentDidMount () {
    this.analitycs()
  }

  analitycs () {
    const s = document.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.innerHTML = `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-141172940-1');`
    this.instance.appendChild(s)
  }

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
          {/* Se agrego un cambio al title */}
          <title>{`${this.props.title} - La opinión`}</title>
          <link rel='stylesheet' href={`/css/${this.props.page}.css`} />
          <script async src='https://www.googletagmanager.com/gtag/js?id=UA-141172940-1' />
        </head>
        <body>
          {this.props.children}
          <script src={`/js/${this.props.page}.js`} />
          {
            !this.props.isDeveloping &&
              <script src='/js/vendor_app.js' />
          }
        </body>
      </html>
    )
  }
}

export default Layout
