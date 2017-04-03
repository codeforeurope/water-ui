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
import resultexplanation from './resultexplanation'
import buttoncompare from './buttoncompare'
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
                <resultexplanation />
                <p><br /></p>
                <p><buttoncompare /></p>
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
