const p = require('path')
const cliRoot = p.resolve(__dirname, '..')
const pkgRoot = p.resolve(cliRoot, '..')
const proRoot = p.resolve(pkgRoot, '..')
const blogRoot = p.resolve(pkgRoot, 'temp-blog')
const docsRoot = p.resolve(pkgRoot, 'temp-docs')

module.exports = {
  cliRoot,
  pkgRoot,
  proRoot,
  blogRoot,
  docsRoot
}