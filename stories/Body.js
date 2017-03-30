import React from 'react'
import location from './location'
import intro from './intro'
import results from './results'
import footer from './footer'

class Body extends React.Component {
  render () {
    return (
      <div className='container'>
        <location />
        <intro />
        <location />
        <results />
        <footer />
      </div>
    )
  }
}

export default Body
