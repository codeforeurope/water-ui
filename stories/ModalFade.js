import React from 'react'
import ButtonClose from './ButtonClose'
const styles = {
  'modal_open': {
    'overflow': 'hidden'
  },
  'modal': {
    'display': 'none',
    'overflow': 'auto',
    'overflowY': 'scroll',
    'position': 'fixed',
    'top': '0',
    'right': '0',
    'bottom': '0',
    'left': '0',
    'zIndex': '1050',
    'WebkitOverflowScrolling': 'touch',
    'outline': '0'
  },
  'modal_fade__modal_dialog': {
    'WebkitTransform': 'translate(0, -25%)',
    'MsTransform': 'translate(0, -25%)',
    'transform': 'translate(0, -25%)',
    'WebkitTransition': '-webkit-transform 0.3s ease-out',
    'MozTransition': '-moz-transform 0.3s ease-out',
    'OTransition': '-o-transform 0.3s ease-out',
    'transition': 'transform 0.3s ease-out'
  },
  'modal_in__modal_dialog': {
    'WebkitTransform': 'translate(0, 0)',
    'MsTransform': 'translate(0, 0)',
    'transform': 'translate(0, 0)'
  },
  'modal_dialog': {
    'position': 'relative',
    'width': 'auto',
    'margin': '10px'
  },
  'modal_content': {
    'position': 'relative',
    'backgroundColor': '#FFFFFF',
    'color': '#444',
    'border': '1px solid rgba(0, 0, 0, 0.2)',
    'borderRadius': '6px',
    'WebkitBoxShadow': '0 3px 9px rgba(0, 0, 0, 0.5)',
    'boxShadow': '0 3px 9px rgba(0, 0, 0, 0.5)',
    'backgroundClip': 'padding-box',
    'outline': 'none'
  },
  'modal_content_h4': {
    'color': '#444'
  },
  'modal_backdrop': {
    'position': 'fixed',
    'top': '0',
    'right': '0',
    'bottom': '0',
    'left': '0',
    'zIndex': '1040',
    'backgroundColor': '#000000'
  },
  'modal_backdrop_fade': {
    'opacity': '0',
    'filter': 'alpha(opacity=0)'
  },
  'modal_backdrop_in': {
    'opacity': '0.5',
    'filter': 'alpha(opacity=50)'
  },
  'modal_header': {
    'padding': '15px',
    'borderBottom': '1px solid #2a9fd6',
    'minHeight': '16.42857143px'
  },
  'modal_header__close': {
    'marginTop': '-2px'
  },
  'modal_title': {
    'margin': '0',
    'lineHeight': '1.42857143'
  },
  'modal_body': {
    'position': 'relative',
    'padding': '20px'
  },
  'modal_footer': {
    'marginTop': '15px',
    'padding': '19px 20px 20px',
    'textAlign': 'right',
    'borderTop': '1px solid #2a9fd6'
  },
  'modal_footer__btn____btn': {
    'marginLeft': '5px',
    'marginBottom': '0'
  },
  'modal_footer__btn_group__btn____btn': {
    'marginLeft': '-1px'
  },
  'modal_footer__btn_block____btn_block': {
    'marginLeft': '0'
  },
  '@media (min-width: 768px)': {
    '__expression__': '(min-width: 768px)',
    'modal_dialog': {
      'width': '600px',
      'margin': '30px auto'
    },
    'modal_content': {
      'WebkitBoxShadow': '0 5px 15px rgba(0, 0, 0, 0.5)',
      'boxShadow': '0 5px 15px rgba(0, 0, 0, 0.5)'
    },
    'modal_sm': {
      'width': '300px'
    }
  },
  '@media (min-width: 989px)': {
    '__expression__': '(min-width: 989px)',
    'modal_lg': {
      'width': '900px'
    }
  }
}

export default class Welcome extends React.Component {
  showApp (e) {
    e.preventDefault()
    if (this.props.showApp) { this.props.showApp() }
  }

  render () {
    return (
      <div style={styles.main}>
        <div class='{style.modal fade}' id='contactDialog' tabindex='-1'>
          <div class='{style.modal-dialog}'>
            <div class='style.modal-content}'>
              <div class='{style.modal-header}'>
                <ButtonClose />
                <button type='button' class='close' data-dismiss='modal'>&times;</button>
                <h4 class='modal-title'>Kontakt</h4>
              </div>
              <div class='modal-body'>
                <p>Wir freuen uns über Feedback:</p>
                <p>E-Mail Adresse: <a href='mailto:muenster@codefor.de'>muenster@codefor.de</a> - Vielen Dank!</p>
                <p>Bitte beachten Sie, dass für keine der hier aufgeführten Daten Gewähr genommen wird. Es kann vereinzelt zu fehlerhaften Angaben kommen. Haben Sie einen Fehler entdeckt? Schreiben Sie uns!</p>
                <p>Oder sind Sie Mitarbeiter der Stadtwerke Münster und möchten Ihre Daten eintragen? Schicken Sie uns einfach Ihre Daten per E-Mail.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
