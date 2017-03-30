import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {IntlProvider, FormattedMessage, addLocaleData} from 'react-intl'

import en from 'react-intl/lang/locale/en'
import fr from 'react-intl/lang/locale/fr'
import es from 'react-intl/lang/locale/es'
import nl from 'react-intl/lang/locale/nl'
import ga from 'react-intl/lang/locale/ga'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'Eric',
      unreadCount: 1000
    }
  }

  render () {
    const {name, unreadCount} = this.state

    return (
      <p>
        <FormattedMessage
          id='welcome'
          defaultMessage={`Hello {name}, you have {unreadCount, number} {unreadCount, plural,
                      one {message}
                      other {messages}
                    }`}
          values={{name: <b>{name}</b>, unreadCount}}
                />
      </p>
    )
  }
}

ReactDOM.render(
  <IntlProvider locale='en'>
    <App />
  </IntlProvider>,
    document.getElementById('container')
)

addLocaleData([
  ...nl,
  ...ga,
  ...en,
  ...fr,
  ...es
])

ReactDOM.render(
  <IntlProvider locale={usersLocale} messages={translationsForUsersLocale}>
    <App />
  </IntlProvider>, document.getElementById('container'))
