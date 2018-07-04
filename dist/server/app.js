'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _reactEngine = require('react-engine');

var _reactEngine2 = _interopRequireDefault(_reactEngine);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import ReactDOMServer from 'react-dom/server'

// const express = require('express');
var app = (0, _express2.default)();
// x = 5 -> x !== 5 -> false -> x !== 8 -> true los valores no son iguales
// En el package para linux -> NODE_ENV=production node dist/server/server.js

// import React from 'react'
var isDeveloping = process.env.NODE_ENV !== 'production';

if (isDeveloping) {
  var webpack = require('webpack');
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackDevConf = require('../webpack.dev.config.js');
  var webpackHotMiddleware = require('webpack-hot-middleware');

  var compiler = webpack(webpackDevConf);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: '/',
    quiet: true
  }));

  app.use(webpackHotMiddleware(compiler));
}

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

// definimos el engine para archivos jsx
app.engine('.js', _reactEngine2.default.server.create());
// configuramos la ruta a las vistas
app.set('views', _path2.default.resolve(__dirname, 'views'));
// indicamos que el engine a usar es el de archivos jsx
app.set('view engine', 'js');
// le indicamos que use react-engine como engine de nuestras vistas
app.set('view', _reactEngine2.default.expressView);

app.use(_express2.default.static('dist/public')); // Files css, js etc

app.get('/', function (req, res) {
  // res.status(200).send('Hola mundo')
  // const html = React.renderToString(<Home />);
  // const html = ReactDOMServer.renderToString(React.createElement(Home))

  // res.send(html);
  res.render('Home');
});

app.get('/producto/:id', function (req, res) {
  // console.log(req.params.id)
  var data = {
    id: req.params.id
  };
  res.render('Product', data);
});

var listId = _config2.default.LISTID;
var apiKey = _config2.default.API_KEY;
var dc = apiKey.split('-')[1];

// const b64string = 'any:' + apiKey

app.post('/subscription-email', function (req, res) {
  // console.info(req.body.email)
  _superagent2.default.post('https://' + dc + '.api.mailchimp.com/3.0/lists/' + listId + '/members/').set('content-type', 'application/json').set('Authorization', 'Basic ' + apiKey).send({
    'email_address': req.body.email,
    'status': 'subscribed',
    'merge_fields': {
      'FNAME': req.body.firstName,
      'LNAME': req.body.lastName
    }
  }).then(function (response) {
    // console.log(response.status)
    if (response.status < 300) {
      res.status(200).send({ message: 'Gracias por subscribirse.', status: 200 });
    } else {
      res.status(400).send({ message: 'Algo salio mal intentalo mas tarde.', status: 400 });
    }
  }).catch(function (err) {
    // console.log(err.status)
    if (err.status === 400) {
      res.status(400).send({ message: 'El Correo electrónico ya existe.', status: 400 });
    } else {
      res.status(500).send({ message: 'Algo salio mal :(', status: 500 });
    }
  });
});

// app.get('/prueba', (req, res) => {
//   res.render('Prueba', { name: 'React' })
// })

exports.default = app;
// module.exports = app;