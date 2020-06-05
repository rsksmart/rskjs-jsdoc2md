const jsdoc2md = require('jsdoc-to-markdown')
const defaultOptions = require('./options')

function Jsdoc2md (options = {}) {
  options = Object.assign(defaultOptions, options)
  const render = (files) => {
    const opts = Object.assign({}, options)
    opts.files = files
    return jsdoc2md.render(opts)
  }
  return Object.freeze({ render })
}

module.exports = Jsdoc2md