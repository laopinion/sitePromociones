'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _Home = require('./views/Home');

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const express = require('express');
var app = (0, _express2.default)();

// // definimos el engine para archivos jsx
// app.engine('.jsx', engine.server.create());
// // configuramos la ruta a las vistas
// app.set('views', path.resolve(__dirname, 'views'));
// // indicamos que el engine a usar es el de archivos jsx
// app.set('view engine', 'jsx');
// // le indicamos que use react-engine como engine de nuestras vistas
// // app.set('view', engine.expressView);
// app.set("view", require("react-engine/lib/expressView"));

// app.use(express.static('dist'));// Files css, js etc

// const engine = require('react-engine');
// const path = require('path');
// const React = require('react')
app.get('/', function (req, res) {
  // res.status(200).send('Hola mundo')
  // const html = React.renderToString(<Home />);
  var html = _server2.default.renderToString(_react2.default.createElement(_Home2.default));

  res.send(html);
  // res.render('home');
});

exports.default = app;
// module.exports = app;