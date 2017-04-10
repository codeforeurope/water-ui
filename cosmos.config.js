// cosmos.config.js

module.exports = {
  componentPaths: [
  // ('./src/components'),
  ('./components') // NB Don't put in trailing / - it breaks the component name
  ],
  globalImports: [
    './src/static/css/styledbootstrap.css',
    //  './node_modules/react-grid-layout/css/styles.css',
    //  './node_modules/react-resizable/css/styles.css',
    // './src/static/css/layout.css',
    './src/static/css/bootstrap.css',
    './src/static/css/bootstrap-cyborg.css',
    // './index2_files/6a2277d1.tw.min.js',
    './src/static/css/main.css'
  ],
  publicPath: './src/static',

  // Read more about proxies below
  proxies: [
    // './redux-proxy.js',
    // './cosmosproxy.js'
  ],
  webpackConfigPath: './webpack.config.js'
}
