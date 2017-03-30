import React from 'react'

class gaugeglass extends React.Component {
  render () {
    return (
      <div className='col-lg-6 col-md-6 col-sm-6 col-xs-5'>
        <svg className='gauge-glass-img pull-right' xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 186 837' preserveAspectRatio='xMinYMin meet'>
          <text className='gauge-unit' x={78} y={175} text-anchor='left'>mg/l</text>
          <path className='gauge-glass' d='M145.993,832.667H38.398\n\t\t\t\t\t\t\t\t\t\t\tc-16.112,0-15.916-16.613-15.916-16.613V158.107c-8.89,0-16.094-7.203-16.094-16.092v-7.179c0-8.887,7.204-16.094,16.094-16.094\n\t\t\t\t\t\t\t\t\t\t\th139.661c8.887,0,16.094,7.207,16.094,16.094v7.179c0,8.889-7.207,16.092-16.094,16.092l-0.178,657.84\n\t\t\t\t\t\t\t\t\t\t\tC161.966,815.947,162.999,832.667,145.993,832.667z' />
          <g className='gauge-values'>
            <defs>
              <clippath id='cut-off-top'>
                <rect className='gauge-value-bubble-cut' x={34} y={822} width={116} height={0} />
              </clippath>
              <pattern id='range-indicator' x={8} y={8} width={8} height={8} patternUnits='userSpaceOnUse'>
                <line className='range-indicator' x1={0} x2={8} y1={8} y2={0} />
              </pattern>
            </defs>
            <rect className='gauge-value' x='34.5' y={822} width={115} height={0} />
            <path className='gauge-value-bubbles' clip-path='url(#cut-off-top)' d='M149.469,324.376H34.005v482.118c0,0-0.174,14.819,14.195,14.819h86.875\n\t\t\t\t\t\t\t\t\t\t\t\tc15.169,0,14.247-14.912,14.247-14.912L149.469,324.376z M73.76,741.827c-3.763,0-6.814-3.05-6.814-6.813s3.052-6.813,6.814-6.813\n\t\t\t\t\t\t\t\t\t\t\t\tc3.764,0,6.812,3.05,6.812,6.813S77.524,741.827,73.76,741.827z M105.182,801.029c-11.289,0-20.439-9.15-20.439-20.439\n\t\t\t\t\t\t\t\t\t\t\t\tc0-11.288,9.15-20.439,20.439-20.439c11.29,0,20.441,9.151,20.441,20.439C125.623,791.879,116.472,801.029,105.182,801.029z\n\t\t\t\t\t\t\t\t\t\t\t\t M117.668,739.558c-9.198,0-16.653-7.457-16.653-16.653s7.455-16.658,16.653-16.658c9.196,0,16.653,7.462,16.653,16.658\n\t\t\t\t\t\t\t\t\t\t\t\tS126.864,739.558,117.668,739.558z' />
            <rect className='gauge-value-2' x='34.5' y={822} width={115} height={0} fill='url(#range-indicator)' />
          </g>
          <g className='gauge-bubbles'>
            <path d='M141.745,24.696c0,11.292-9.15,20.441-20.442,20.441c-11.287,0-20.437-9.149-20.437-20.441\n\t\t\t\t\t\t\t\t\t\t\t\tc0-11.288,9.149-20.439,20.437-20.439C132.595,4.257,141.745,13.409,141.745,24.696z' />
            <path d='M106.921,92.833c0,3.763-3.048,6.813-6.814,6.813c-3.763,0-6.813-3.05-6.813-6.813\n\t\t\t\t\t\t\t\t\t\t\t\tc0-3.762,3.05-6.812,6.813-6.812C103.873,86.021,106.921,89.071,106.921,92.833z' />
            <path d='M84.963,59.335c0,9.198-7.457,16.658-16.658,16.658c-9.192,0-16.651-7.459-16.651-16.658\n\t\t\t\t\t\t\t\t\t\t\t\tc0-9.194,7.459-16.651,16.651-16.651C77.506,42.684,84.963,50.141,84.963,59.335z' />
          </g>
          <g className='gauge-lines' />
          <line className='average-indicator' x1={36} x2={68} y1={822} y2={822} />
        </svg>
        <ul className='gauge-description gauge-glass-description pull-right list-unstyled' style={{
          maxWidth: 200
        }}>
          <li className='highlight'><strong>Wert: <span className='gauge-value' /> mg/l</strong></li>
          <li>Grenzwert: <span className='gauge-legal-limit' /></li>
          <li>Durchschnitt: <span className='gauge-average-value' /> mg/l<br /><small>(Region Heilbronn, rote Linie)</small></li>
          <li className='gauge-daily-dosis-container'>Tagesbedarf: <span className='gauge-daily-dosis'>~</span></li>
        </ul>
      </div>
    )
  }
}

export default gaugeglass
