import React from 'react';

class selectstreet extends React.Component {
  render() {
    return (
      <div className="form-group select-street" style={{}}>
        <label htmlFor="streetZone" className="col-sm-2 control-label">Straße</label>
        <div className="col-sm-10">
          <select id="streetZone" className="streetZone form-control">
          </select>
        </div>
      </div>
      );
  }
}

export default selectstreet;