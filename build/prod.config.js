const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const WebpackMerge = require('webpack-merge')
const commonConfig = require('./common.config')

module.exports = WebpackMerge(commonConfig, {
  plugins: [
    new UglifyjsWebpackPlugin()
  ]
})