const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const webpack = require('webpack')
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'

module.exports = merge(common, {
  entry: {
    home: [path.resolve(__dirname, 'src/entries/Home.jsx'), hotMiddlewareScript],
    product: [path.resolve(__dirname, 'src/entries/Product.jsx'), hotMiddlewareScript]
  },
  mode: 'development',
  devtool: 'inline-source-map',
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor_app',
          chunks: 'all',
          minChunks: 2
        }
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
