import React from 'react'
import createContextProxy from 'react-cosmos-context-proxy'

export default () => {
  return createContextProxy({
    // Expects fixture.context to contain `theme` object
    // See examples/context
    childContextTypes: {
      theme: React.PropTypes.object.isRequired
    }
  })
}
