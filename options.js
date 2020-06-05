const path = require('path')
const partial = path.resolve(__dirname, './scope.hbs')

const options = {
  partial,
  "heading-depth": 2,
  "no-gfm": true,
  "param-list-format": "list",
  "global-index-format": "none",
  "example-lang": "js"
}

module.exports = options
