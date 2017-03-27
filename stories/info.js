import React from 'react';
import panel from './panel';

class info extends React.Component {
  render() {
    return (
      <div className="info-container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">Information zu <span className="zone-id" /></h4>
              </div>
              <div className="panel-body">
                <p className="zone-year-container">
                  Die Daten stammen aus dem Jahr <span className="zone-data-year" />
                </p>
                <p>
                  <span className="zone-description" />
                </p>
              </div>
            </div>
            <panel></panel>
          </div>
        </div>
      </div>
      );
  }
}

export default info;