
require('dotenv').config()

module.exports = {
  PORT: process.env.PORT || 3003,
  API_KEY: process.env.API_KEY || 'api-key',
  LISTID: process.env.LISTID || 'list-id',
  SECRET_CAPTCHA: process.env.SECRET_CAPTCHA || 'something-secret',
  KEY_PAYU: process.env.KEY_PAYU || '123456'
}
