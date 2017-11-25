// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    index: path.resolve(__dirname, 'dist/index.html'),
    assetsRoot: path.resolve(__dirname, 'dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: process.env.NODE_ENV === 'production' ? '../' : '/',
    productionSourceMap: true
  },
  dev: {
    host: '10.13.1.44',
    port: 9083,
    proxyTable: {}
  }
}
