const assert = require('assert')
const path = require('path')
const fs = require('fs')
const Jsdoc2md = require('../index')

const exampleFile = path.resolve(__dirname, './example.js')
const parser = Jsdoc2md()
const exampleMd = fs.readFileSync(path.resolve(__dirname, './example.md')).toString().trim()
test()


async function test () {
  try {
    assert.deepEqual(typeof parser.render, 'function')
    let md = await parser.render(exampleFile)
    // console.log(md)
    assert.equal(md.trim(), exampleMd)
  } catch (err) {
    console.error(err)
    process.exit(9)
  }
}