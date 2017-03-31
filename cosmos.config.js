// cosmos.config.js


module.exports = {
  componentPaths: [
  // ('./src/components/'),
  ('./components/')
  ],
  globalImports: [
//    './src/static/css/bootstrap.css',
//    './src/static/css/bootstrap-cyborg.css', // crashes with Module build failed: ReferenceError: document is not defined when included //TODO
    './src/static/css/main.css'
  ],
  publicPath: 'src/static',

  // Read more about proxies below
  proxies: [
    // './redux-proxy.js',
    './cosmosproxy.js'
  ],
  hostname: 'localhost',
  port: 8989,
  webpackConfigPath: './webpack.config.js'
}
