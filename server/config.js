
require('dotenv').config()

module.exports = {
  PORT: process.env.PORT || 3003,
  API_KEY: process.env.API_KEY || 'api-key',
  LISTID: process.env.LISTID || 'list-id'
}
