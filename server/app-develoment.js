// const express = require('express');
import express from 'express'
// import React from 'react'
import engine from 'react-engine'
import path from 'path'
// import ReactDOMServer from 'react-dom/server'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackDevConf from '../webpack.dev.config.js'
import webpackHotMiddleware from 'webpack-hot-middleware'

const app = express()

const compiler = webpack(webpackDevConf)

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/',
  quiet: true
}))

app.use(webpackHotMiddleware(compiler))

// definimos el engine para archivos jsx
app.engine('.js', engine.server.create())
// configuramos la ruta a las vistas
app.set('views', path.resolve(__dirname, 'views'))
// indicamos que el engine a usar es el de archivos jsx
app.set('view engine', 'js')
// le indicamos que use react-engine como engine de nuestras vistas
app.set('view', engine.expressView)

app.use(express.static('dist/public'))// Files css, js etc

app.get('/', (req, res) => {
  // res.status(200).send('Hola mundo')
  // const html = React.renderToString(<Home />);
  // const html = ReactDOMServer.renderToString(React.createElement(Home))

  // res.send(html);
  res.render('Home')
})

app.get('/producto/:id', (req, res) => {
  // console.log(req.params.id)
  const data = {
    id: req.params.id
  }
  res.render('Product', data)
})

// app.get('/prueba', (req, res) => {
//   res.render('Prueba', { name: 'React' })
// })

export default app
// module.exports = app;
