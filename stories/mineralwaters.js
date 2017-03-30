import React from 'react'
import gauge from './gauge'

class mineralwaters extends React.Component {
  render () {
    return (
      <div className='section section-compare' style={{
        display_nonemarginTop: '-32px'
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
            <div className='row'>
              <div className='col-lg-3 col-md-3 hidden-sm hidden-xs' />
              <div className='col-lg-5 col-md-5 col-sm-6 col-xs-6'>
                <div className='gauge-description gauge-glass-description' style={{
                  marginTop: 38
                }}>
                  <table className='table table-gauge-description'>
                    <tbody><tr>
                      <th style={{
                        border: 'none'
                      }}><strong className='comparison-water-label highlight'>-</strong></th>
                      <td style={{
                        border: 'none',
                        minWidth: 80
                      }}><strong className='comparison-water-value highlight'>-</strong></td>
                    </tr>
                      <tr>
                        <th>mein Leitungswasser</th>
                        <td><span className='comparison-water-value-self' /><br /><small>(rote Linie)</small></td>
                      </tr>
                      <tr className='gauge-daily-dosis-container'>
                        <th>Tagesbedarf</th>
                        <td><span className='gauge-daily-dosis'>~</span></td>
                      </tr>
                    </tbody></table>
                  <br /><br />
                  <div className='attribute-description attribute-description-natrium' style={{}}>
                    <p>Natrium reguliert den Wasserhaushalt.</p>
                    <p>Sportlern ist natriumreiches Wasser zu empfehlen, Menschen mit Bluthochdruck oder Säuglinge sollten natriumarmes Wasser trinken.<br /><em>(weniger als 20 mg/l)</em></p>
                  </div>
                  <div className='attribute-description attribute-description-kalium' style={{}}>
                    <p>Kalium hält den Wasser- und Elektrolythaushalt im Gleichgewicht, reguliert den Blutdruck und ist wichtig für einen regelmäßigen Herzschlag sowie die Nerven.</p>
                  </div>
                  <div className='attribute-description attribute-description-calcium' style={{}}>
                    <p>Calcium wird zur Bildung der Knochen und Zähne gebraucht.</p>
                    <p>Auch für die Muskeln und die Blutgerinnung ist Calcium wichtig.</p>
                  </div>
                  <div className='attribute-description attribute-description-magnesium' style={{}}>
                    <p>Magnesium beeinflusst den Energiestoffwechsel, das Zusammenspiel von Nerven auf Muskeln, für den Eiweißaufbau sowie und die
                      Knochenmineralisation.</p>
                  </div>
                  <div className='attribute-description attribute-description-chlorid' style={{}}>
                    <p>Chlorid ist für Regulation des Wasserhaushaltes, die Nerven, das Herz und die Muskeln sowie den Säure-Basenhaushalt wichtig.</p>
                    <p>Da Chlorid ein Bestandteil von Kochsalz ist, wird über die Nahrung meist mehr als genügend Chlorid aufgenommen.</p>
                  </div>
                  <div className='attribute-description attribute-description-nitrat' style={{}}>
                    <p>Nitrat wird im Körper in giftiges Nitrit umgewandelt. Zudem können aus Nitriten krebserregende Nitrosamine entstehen.</p>
                    <p>Das Nitrit selbst kann eine Sauerstoffunterversorgung aller Organe und Gewebe bewirken. Säuglinge sind hierfür besonders anfällig.</p>
                  </div>
                  <div className='attribute-description attribute-description-sulfat' style={{}}>
                    <p>Sulfate wirken verdauungsfördernd, ab einem Gehalt von 1200 mg/l sogar abführend.</p>
                  </div>
                </div>
              </div>
              <gauge />
            </div>
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
