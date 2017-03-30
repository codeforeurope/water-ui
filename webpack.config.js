var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var webpack = require('webpack')

process.traceDeprecation = true
// TODO https://www.npmjs.com/package/transifex-loader

module.exports = {
  entry: {
    'desktop/index': './js/desktop/index.js',
    'desktop/post': './js/desktop/post.js',
    'desktop/vendor': ['jquery'],

    'mobile/index': './js/mobile/index.js',
    'mobile/vendor': ['jquery']
  },
  output: {
    filename: '[name].js?[hash]-[chunkhash]',
    chunkFilename: '[name].js?[hash]-[chunkhash]',
    path: path.join(__dirname, '/build'),
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
        test: /\.woff$/i,
        loader: 'file-loader'
      }, {
        test: /\.eot$/i,
        loader: 'file-loader'
      }, {
        test: /\.ttf$/,
        loader: 'ttf-base64-loader',
        exclude: /node_modules/
      }, {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            'react',
            [
              'es2015', {
                'modules': false
              }
            ],
            'stage-0'
          ]
        }
      }, {
        test: /\.svg$/i,
        loader: 'inline-loader'
        /*     test: /\.svg$/,
        loaders: [
          'babel-loader', {
            loader: 'react-svg',
            query: {
              svgo: {
                plugins: [
                  {
                    removeTitle: false
                  }
                ],
                floatPrecision: 2
              }
            }
          }
        ]
*/
      }, {
        test: /\.css$/,
        exclude: [
          /node_modules/, /\.base\.css$/
        ],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          publicPath: '../'
        })
      }, {
        test: /\.png$/,
        loader: 'file-loader'
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin({filename: 'css/[name].css?[hash]-[chunkhash]-[contenthash]-[name]', disable: false, allChunks: true}),
    new webpack
      .optimize
      .CommonsChunkPlugin({
        names: [
          'desktop/common', 'desktop/vendor'
        ],
        chunks: [
          'desktop/common', 'desktop/index', 'desktop/post'
        ],
        minChunks: 2
      }),
    new webpack
      .optimize
      .CommonsChunkPlugin({
        names: [
          'mobile/common', 'mobile/vendor'
        ],
        chunks: [
          'mobile/common', 'mobile/index'
        ],
        minChunks: 2
      })
  ]
}
