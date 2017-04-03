import React from 'react'
import location from './location'
import intro from './intro'
import results from './results'
import footer from './footer'

class Body extends React.Component {
// constructor (props) {
//    super(props)
//  }

  render () {
    return (
      <div className='container'>
        <location />
        <intro />
        <results />
        <footer />
      </div>
    )
  }
}

export default Body
