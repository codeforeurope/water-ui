import React from 'react';

class selectdistrict extends React.Component {
  render() {
    return (
      <div className="form-group select-district" style={{
        display: 'none'
      }}>
        <label htmlFor="district" className="col-sm-2 control-label">Ortsteil</label>
        <div className="col-sm-10">
          <select id="district" className="district form-control">
          </select>
        </div>
      </div>
      );
  }
}

export default selectdistrict;