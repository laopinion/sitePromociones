import Head from 'next/head'
import Header from './Header'
import Footer from './containers/Footer'
import Router from 'next/router'
import * as gtag from '../helpers/gtag'
import './normalize.scss'
import './app.sass'

// const layoutStyle = {
//   margin: 20,
//   padding: 20,
//   border: '1px solid #DDD'
// }

// const Layout = props => (
//   <div style={layoutStyle}>
//     <Header />
//     {props.children}
//   </div>
// )

Router.onRouteChangeComplete = url => {
  const NODE_ENV = process.env.NODE_ENV
  if (NODE_ENV !== 'development') {
    gtag.trackPageView(url)
  }
}

const Layout = ({ children, title }) => {
  return (
    <div id='Layout'>
      <Head>
        <title>{`${title} - La opinión`}</title>

        <meta charSet='UTF-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
        />

        <link rel='shortcut icon' type='image/x-icon' href='/static/favicon/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/static/favicon/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/static/favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/static/favicon/favicon-16x16.png' />
        <link rel='manifest' href='/static/favicon/site.webmanifest' />
        <link rel='mask-icon' href='/static/favicon/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />

      </Head>
      <Header />

      {children}

      <Footer />

    </div>
  )
}

export default Layout
