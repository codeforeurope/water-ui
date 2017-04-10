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

// const rootEL = document.body.querySelector('#app')

const appProps = { code: 'it', size: '3x' }
ReactDOM.render(<App {...appProps} />, this.parent)

/*
import React, {Component} from "react";
import CountrySelect from "react-country-select";

export default class App extends Component {
    propTypes : {
        onSelect: React.PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            tag: null,
        };
        this.onSelect = this.onSelect.bind(this);
    }

    onSelect(val) {
      console.log("values selected are:", val);
      //you can handle options selected here.
    }

    render() {
        return (
            <div>
              <CountrySelect multi={true} flagImagePath="./assets/flags/" onSelect={this.onSelect}/>
            </div>
        );
    }
}

*/
