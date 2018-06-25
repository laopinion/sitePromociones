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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import ReactDOMServer from 'react-dom/server'

// import React from 'react'
var app = (0, _express2.default)();

// import Home from './views/Home'

// definimos el engine para archivos jsx
// const express = require('express');
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

app.get('/prueba', function (req, res) {
  res.render('Prueba', { name: 'React' });
});

exports.default = app;
// module.exports = app;