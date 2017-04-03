import React from 'react'
import mineralwaterresults from './mineralwaterresults'
import gauge from './gauge'

class mineralwater extends React.Component {
  render () {
    return (
      <div className='row'>
        <div className='col-lg-3 col-md-3 hidden-sm hidden-xs' />
        <mineralwaterresults />
        <gauge />
      </div>
    )
  }
}

export default mineralwater
