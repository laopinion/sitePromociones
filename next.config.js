const withSass = require('@zeit/next-sass')

// Run sin zeit now
// module.exports = withSass()

// Config para zeit now with serverless
module.exports = withSass({
  target: 'serverless'
})
