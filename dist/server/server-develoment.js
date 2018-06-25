'use strict';

var _appDeveloment = require('./app-develoment');

var _appDeveloment2 = _interopRequireDefault(_appDeveloment);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_appDeveloment2.default.listen(_config.PORT, function () {
  console.log('Server on port ' + _config.PORT);
});