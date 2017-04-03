var React = require('react')
var ReactDOMServer = require('react-dom')
var HtmlToReactParser = require('html-to-react')
var fs = require('fs')

// var htmlToReactParser = new HtmlToReactParser();
var htmlInput = fs.createReadStream('index.html').read()
fs.close

var isValidNode = function () {
  return true
}
// Order matters. Instructions are processed in the order they're defined
var processNodeDefinitions = HtmlToReactParser.ProcessNodeDefinitions(React)

var processingInstructions = [
  {
       // This is REQUIRED, it tells the parser
       // that we want to insert our React
       // component as a child
    replaceChildren: true,
    shouldProcessNode: function (node) {
      return node.attribs && node.attribs['data-test'] === 'foo'
    },
    processNode: function (node, children, index) {
      return React.createElement('h1', {key: index }, 'Heading')
    }
  },
  {
        // Anything else
    shouldProcessNode: function (node) {
      return true
    },
    processNode: processNodeDefinitions.processDefaultNode
  }
]

var reactComponent = processNodeDefinitions.parseWithInstructions(
  htmlInput, isValidNode, processingInstructions)
var reactHtml = ReactDOMServer.renderToStaticMarkup(
  reactComponent)
fs.createWriteStream('react.html').write(reactHtml)
fs.close
