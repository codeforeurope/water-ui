
var TransifexConfig = require('transifex-config')
var txc = new TransifexConfig()
// https://github.com/freaktechnik/transifex-config/blob/master/docs/api.md

// https://github.com/queicherius/i18next-po-loader
console.log('config')
console.log(txc.getRC())
console.log('Resorces:')
console.log(txc.getResources())

export const makeFormattedMessage = (descriptor) => <FormattedMessage {...descriptor} />
