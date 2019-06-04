const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const request = require('superagent')
const { PORT, LISTID, API_KEY, SECRET_CAPTCHA } = require('./config')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: false }))

    // server.get('/p/:id', (req, res) => {
    //   const actualPage = '/post'
    //   const queryParams = { title: req.params.id }
    //   app.render(req, res, actualPage, queryParams)
    // })

    server.get('/producto/:slug', (req, res) => {
      const actualPage = '/product'
      const queryParams = { slug: req.params.slug }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('/producto', (req, res) => {
      app.render(req, res, '/productos')
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    const listId = LISTID
    const apiKey = API_KEY
    const dc = apiKey.split('-')[1]

    server.post('/subscription-email', (req, res) => {
      // console.info(req.body.email)
      // console.log(req.body.token)

      request
        .post(`https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_CAPTCHA}&response=${req.body.token}&remoteip=${req.connection.remoteAddress}`)
        .set('content-type', 'application/json')
        .then((response) => {
          // console.log(response)
          if (response.body.success !== undefined && !response.body.success) {
            res.status(400).send({ message: 'Captcha validation failed.', status: 400 })
          }
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
    })

    server.listen(PORT, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${PORT}`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
