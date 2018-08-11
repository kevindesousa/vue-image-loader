const webpack = require('webpack')
const babel = require('./rules/babel')
const vue = require('./rules/vue')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '../dist'),
    filename: 'vue-image-loader.js'
  },
  module: {
    rules: [babel, vue]
  },
  plugins: []
}
