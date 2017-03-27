import React from 'react';
import selectdistrict from './selectdistrict';
import selectstreet from './selectstreet';
import selectlocation from './selectlocation';

class location extends React.Component {
  render() {
    return (
      <div className="choose-location">
        <div className="well choose-location-well">
          <form className="form-horizontal form-choose-location" role="form">
            <div className="form-group select-city">
              <label htmlFor="city" className="col-sm-2 control-label">Ort</label>
              <div className="col-sm-10">
                <select id="city" className="city form-control">
                  <option value>Bitte auswählen</option>
                </select>
              </div>
            </div>
            <selectdistrict></selectdistrict>
            <selectstreet></selectstreet>
            <selectlocation></selectlocation>
          </form>
          <br />
        </div>
        <p><small>Derzeit sind Daten aus dem Stadt- und Landkreis Heilbronn auswählbar.</small></p>
      </div>
      );
  }
}

export default location;