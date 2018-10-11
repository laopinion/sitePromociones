// const express = require('express');
import express from 'express'
// import React from 'react'
import engine from 'react-engine'
import path from 'path'
import bodyParser from 'body-parser'
import request from 'superagent'
import config from './config'
// import ReactDOMServer from 'react-dom/server'

const app = express()
// x = 5 -> x !== 5 -> false -> x !== 8 -> true los valores no son iguales
// En el package para linux -> NODE_ENV=production node dist/server/server.js
const isDeveloping = process.env.NODE_ENV !== 'production'

if (isDeveloping) {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackDevConf = require('../webpack.dev.js')
  const webpackHotMiddleware = require('webpack-hot-middleware')

  const compiler = webpack(webpackDevConf)

  app.use(webpackDevMiddleware(compiler, {
    publicPath: '/',
    quiet: true
  }))

  app.use(webpackHotMiddleware(compiler))
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

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
  const data = {
    isDeveloping
  }
  // res.send(html);
  res.render('Home', data)
})

app.get('/producto', (req, res) => {
  // console.log(req.params.id)
  const data = {
    isDeveloping
  }
  res.render('ListProducts', data)
})

app.get('/producto/:id', (req, res) => {
  // console.log(req.params.id)
  const data = {
    id: req.params.id,
    isDeveloping
  }
  res.render('Product', data)
})

const listId = config.LISTID
const apiKey = config.API_KEY
const dc = apiKey.split('-')[1]

// const b64string = 'any:' + apiKey

app.post('/subscription-email', (req, res) => {
  // console.info(req.body.email)
  request
    .post('https://' + dc + '.api.mailchimp.com/3.0/lists/' + listId + '/members/')
    .set('content-type', 'application/json')
    .set('Authorization', 'Basic ' + apiKey)
    .send({
      'email_address': req.body.email,
      'status': 'subscribed',
      'merge_fields': {
        'FNAME': req.body.firstName,
        'LNAME': req.body.lastName
      }
    })
    .then((response) => {
      // console.log(response.status)
      if (response.status < 300) {
        res.status(200).send({ message: 'Gracias por subscribirse.', status: 200 })
      } else {
        res.status(400).send({ message: 'Algo salio mal intentalo mas tarde.', status: 400 })
      }
    })
    .catch((err) => {
      // console.log(err.status)
      if (err.status === 400) {
        res.status(400).send({ message: 'El Correo electrónico ya existe.', status: 400 })
      } else {
        res.status(500).send({ message: 'Algo salio mal :(', status: 500 })
      }
    })
})

// app.get('/prueba', (req, res) => {
//   res.render('Prueba', { name: 'React' })
// })

export default app
// module.exports = app;
