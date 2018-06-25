'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _React = require('React');

var _React2 = _interopRequireDefault(_React);

var _default = require('./layouts/default');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Prueba = function Prueba(props) {
  console.log(props);
  return _React2.default.createElement(
    _default2.default,
    null,
    _React2.default.createElement(
      'div',
      { className: 'hola' },
      _React2.default.createElement(
        'h4',
        null,
        'Hola mundo prueba ',
        props.name,
        ' '
      )
    )
  );
};

exports.default = Prueba;