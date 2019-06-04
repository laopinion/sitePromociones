const express = require('express')
const app = require('./app')
const router = express.Router()

router.get('/productos/:slug', (req, res) => {
  // console.log('El slug is -> ', req.params.slug)
  const actualPage = '/producto'

  const queryParams = { slug: req.params.slug }
  app.render(req, res, actualPage, queryParams)
})

// router.get('/productos', (req, res) => {
//   app.render(req, res, '/productos')
// })

module.exports = router
