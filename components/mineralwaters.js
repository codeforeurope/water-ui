import React from 'react'
import mineralwater from './mineralwater'

class mineralwaters extends React.Component {
  render () {
    return (
      <div className='section section-compare' style={{
        marginTop: '-32px'
      }}>
        <div className='row'>
          <div className='col-lg-5 col-md-5 col-sm-5 col-xs-12 compare-nav'>
            <button type='button' className='btn btn-primary btn-lg btn-block active' data-water='volvic'>Volvic</button>
            <button type='button' className='btn btn-primary btn-lg btn-block' data-water='wueteria'>Wüteria Heiligenquelle</button>
            <button type='button' className='btn btn-primary btn-lg btn-block' data-water='teusser'>Teusser Naturell</button>
            <button type='button' className='btn btn-primary btn-lg btn-block' data-water='vittel'>Vittel</button>
            <button type='button' className='btn btn-primary btn-lg btn-block' data-water='self' style={{
              marginTop: '2em'
            }}>mein Leitungswasser</button>
            <p><br /></p>
          </div>
          <div className='col-lg-7 col-md-7 col-sm-7 col-xs-12'>
            <mineralwater />
          </div>
        </div>
        <p><br /></p>
        <p><br /></p>
        <p><button type='button' className='btn btn-warning switch-to-section' data-section='explanation'><span className='glyphicon glyphicon-chevron-left' /> Zurück</button></p>
        <p><br /></p>
        <p><small>Beispielhaft wurden zwei überregional bekannte Wasser sowie zwei Wasser aus dem Landkreis Heilbronn ausgewählt. Alle vier sind stille Mineralwasser.</small></p>
      </div>
    )
  }
}

export default mineralwaters
