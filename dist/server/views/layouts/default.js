'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// acá definimos el layout de nuestro HTML donde están los tags html, head, body, etc.
var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'html',
        { lang: 'es' },
        _react2.default.createElement(
          'head',
          null,
          _react2.default.createElement('meta', { charSet: 'UTF-8' }),
          _react2.default.createElement('meta', {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
          }),
          _react2.default.createElement(
            'title',
            null,
            this.props.title
          ),
          _react2.default.createElement('link', { rel: 'stylesheet', href: '/css/' + this.props.page + '.css' })
        ),
        _react2.default.createElement(
          'body',
          null,
          this.props.children,
          _react2.default.createElement('script', { src: '/js/vendor_app.js' }),
          _react2.default.createElement('script', { src: '/js/' + this.props.page + '.js' })
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = Layout;