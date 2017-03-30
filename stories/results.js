import React from 'react'
import formresults from './formresults'
import testtype from './testtype'
import testnoresult from './testnoresult'
import mineralNa from './mineralNa'
import mineralK from './mineralK'
import mineralCa from './mineralCa'
import mineralMg from './mineralMg'
import mineralCl from './mineralCl'
import mineralN from './mineralN'
import mineralSo4 from './mineralSo4'
import compare from './compare'
import gaugeglass from './gaugeglass'
import mineralwaters from './mineralwaters'
import sectionmap from './sectionmap'
import info from './info'

class results extends React.Component {
  render () {
    return (
      <div className='results' style={{}}>
        <formresults />
        <testtype />
        <testnoresult />
        <div data-comonent='resultvalue' className='result-with-value'>
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <div className='section section-explanation'>
                <div className='row gauge-glass-container' style={{}}>
                  <div className='col-lg-6 col-md-6 col-sm-6 col-xs-7'>
                    <mineralNa />
                    <mineralK />
                    <mineralCa />
                    <mineralMg />
                    <mineralCl />
                    <mineralN />
                    <mineralSo4 />
                    <br />
                    <p><compare /></p>
                  </div>
                  <gaugeglass />
                </div>
                <div className='row gauge-bar-container' style={{}}>
                  <div className='col-lg-5 col-md-5 col-sm-12 col-xs-12'>
                    <p>Die Wasserhärte gibt an, wie weich oder hart ein Wasser ist. Je mehr Calcium und Magnesium in einem Wasser enthalten sind, desto härter ist es.</p>
                    <p>Hartes Wasser kann in Küche und Bad Kalkflecken verursachen. Wegen seinem hohen Calcium- und Magnesiumgehalt ist es gesünder als weiches Wasser.<br />(Calcium: Aufbau von Knochen und Zähnen, Magnesium: Aufbau von Muskeln und Nerven)</p>
                  </div>
                  <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                    <div style={{
                      paddingRight: 34
                    }}>
                      <img src='trinkwass_files/haushalt.svg' className='pull-right hidden-xs' />
                      <table className='table table-gauge-description gauge-description gauge-bar-description'>
                        <tbody><tr>
                          <th style={{
                            border: 'none'
                          }}><strong className='highlight'>Wert</strong></th>
                          <td style={{
                            border: 'none'
                          }}><strong className='highlight'><span className='gauge-value' /> °dH</strong></td>
                        </tr>
                          <tr>
                            <th>Restalkalität</th>
                            <td><span className='gauge-value-ra' /> °dH</td>
                          </tr>
                          <tr>
                            <th>Bereich</th>
                            <td><span className='gauge-value-label' /></td>
                          </tr>
                          <tr>
                            <th>Durchschnitt<br /><small>Region Heilbronn</small></th>
                            <td><span className='gauge-average-value' /> °dH</td>
                          </tr>
                        </tbody></table>
                      <p><br /></p>
                      <svg className='gauge-bar-img' xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 750 136' preserveAspectRatio='xMinYMin meet'>
                        <defs>
                          <pattern id='hardness-range-indicator' x={6} y={6} width={6} height={6} patternUnits='userSpaceOnUse'>
                            <line className='range-indicator-bar' x1={0} x2={6} y1={6} y2={0} />
                          </pattern>
                        </defs>
                        <g className='gauge-bars' />
                        <g className='gauge-bar-labels' />
                        <g className='gauge-value-indicators'>
                          <rect className='gauge-bar-range-indicator' x='63.5' y={64} width={25} height={40} fill='url(#hardness-range-indicator)' />
                          <circle className='gauge-bar-ball' cx='63.5' cy={84} r={13} />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <p><br /></p>
                <p><button type='button' className='btn btn-warning switch-to-section hidden-md hidden-lg hidden-sm' data-section='compare'><span className='glyphicon glyphicon-chevron-right' /> Vergleich mit Mineralwasser</button></p>
              </div>
              <mineralwaters />
              <sectionmap />
            </div>
          </div>
        </div>
        <info />
      </div>
    )
  }
}

export default results
