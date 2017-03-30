import React from 'react'

import ReactDOM from 'react-dom'
import FlagIconFactory from 'react-flag-icon-css'
const FlagIcon = FlagIconFactory(React)
// If you are not using css modules, write the following:
// const FlagIcon = FlagIconFactory(React, { useCssModules: false })

const App = (props = {}) =>
  <div>
    <FlagIcon code={props.code} size={props.size} />
  </div>

const rootEL = document.body.querySelector('#app')

const appProps = { code: 'it', size: '3x' }
ReactDOM.render(<App {...appProps} />, rootEL)

import selectdistrict from './selectdistrict'
import selectstreet from './selectstreet'
import selectlocation from './selectlocation'

class location extends React.Component {
  render () {
    return (
      <div className='choose-location'>
        <div className='well choose-location-well'>
          <form className='form-horizontal form-choose-location' role='form'>
            <div className='form-group select-city'>
              <label htmlFor='city' className='col-sm-2 control-label'>Ort</label>
              <div className='col-sm-10'>
                <select id='city' className='city form-control'>
                  <option value>Bitte auswählen</option>
                </select>
              </div>
            </div>
            <selectdistrict />
            <selectstreet />
            <selectlocation />
          </form>
          <br />
        </div>
        <p><small>Derzeit sind Daten aus dem Stadt- und Landkreis Heilbronn auswählbar.</small></p>
      </div>
    )
  }
}

export default location
