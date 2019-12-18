const WebpackMerge = require('webpack-merge')
const commonConfig = require('./common.config')

module.exports = WebpackMerge(commonConfig, {
  devServer: {
    contentBase: './dist',
    inline: true
  }
})