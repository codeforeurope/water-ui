Object.defineProperty(exports, '__esModule', {value: true})
var _htmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

var _htmlWebpackPlugin2 = _interopRequireDefault(_htmlWebpackPlugin)

function _interopRequireDefault (obj) {
  return obj && obj.__esModule
    ? obj
    : {
      default: obj
    }
}

module.exports = {
  devtool: 'eval',
  resolve: {
    alias: {
 //     'es2017':path.resolve(__dirname, './node_modules/babel-preset-es2017')
/*      
      'react-grid-layout': path.resolve(__dirname, '../react-grid-layout/'),
      'react-cosmos': path.resolve(__dirname, '../react-cosmos/packages/react-cosmos'),
      'react-cosmos-voyager': path.resolve(__dirname, '../react-cosmos/packages/react-cosmos-voyager'),
      'react-cosmos-webpack': path.resolve(__dirname, '../react-cosmos/packages/react-cosmos-webpack'),
      'react-cosmos-utils': path.resolve(__dirname, '../react-cosmos/packages/react-cosmos-utils'),
      'react-cosmos-config': path.resolve(__dirname, '../react-cosmos/packages/react-cosmos-config')

*/
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    // Using loaders instead of rules to preserve webpack 1.x compatibility
    loaders: [
      {
        test: /\.woff2?$/i,
        loader: 'file-loader'
      }, {
        test: /\.eot$/i,
        loader: 'file-loader'
      }, {
        test: /\.ttf$/,
        loader: 'ttf-base64-loader',
        exclude: /node_modules/
      }, {
        test: /\.svg$/i,
        loader: 'file-loader'
      }, {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        exclude: /node_modules/,
        query: {
          presets: [
            'react',
            [
              'es2015'
            //  'es2015'[{'modules': false}]
            //  'es2017'
            ],
            // 'stage-0'
          ]
        }
      }, {
        test: /\.css$/,
        loader: require.resolve('style-loader') + '!' + require.resolve('css-loader'),
        exclude: /node_modules/
      }, {
        test: /\.png$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [new _htmlWebpackPlugin2.default({title: 'React Cosmos'})]
}
