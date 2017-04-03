var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var webpack = require('webpack')
// var LoaderOptionsPlugin = require
var HtmlWebpackPlugin = require('html-webpack-plugin')
var autoprefixer = require('autoprefixer')

process.traceDeprecation = true
// TODO https://www.npmjs.com/package/transifex-loader

module.exports = {
  entry: {
    'src/index': './index.js',
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
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            'react',
            [//              'es2015' { 'modules': false},
              'es2017'],
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
        loader: ExtractTextPlugin.extract({ // use
          fallback: 'style-loader',
          use: {
            loader: 'css-loader', // use
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
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      postcss: [autoprefixer],
      options: {
        context: __dirname
      }
    }),
    /**
       * Plugin LoaderOptionsPlugin (experimental)
       *
       * See: https://gist.github.com/sokra/27b24881210b56bbaff7
       */
    /*
    new LoaderOptionsPlugin({
      debug: true,
      options: {
        context: __dirname, // helpers.root(),
        output: {
          path: './build'
        }, // This has to be './' and not your output folder. // helpers.root('dist')
        postcss: [autoprefixer],
        sassLoader: {
          includePaths: [path.resolve(__dirname, 'src', 'css')]
        },
        tslint: { // https://github.com/wbuchwalter/tslint-loader
          emitErrors: false,
          failOnHint: false,
          resourcePath: 'src'
        }
      }
    }),
       */
    new HtmlWebpackPlugin(),
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
