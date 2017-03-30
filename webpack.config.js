var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var config = {
  entry: path.resolve(__dirname, 'src/server.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      // Extract css files
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })

      },
      // Optionally extract less files or any other compile-to-css language
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!less-loader' })

      }
    ]
  }
  plugins:[
    ExtractTextPlugin
  ]
}

module.exports = config
