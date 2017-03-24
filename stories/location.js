import React from 'react';
import locationregion from './locationregion';

class location extends React.Component {
  render() {
    return (
      <div className="pull-right hidden-xs">
        <locationregion></locationregion>
      </div>
      );
  }
}

export default location;