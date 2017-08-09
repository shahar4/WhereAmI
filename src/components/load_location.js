import React, { Component } from 'react';
import { geolocated } from 'react-geolocated';

import YourLocation from './youre_in';

class LoadLocation extends Component {
  render() {
      return !this.props.isGeolocationAvailable
        ? <div>Your browser does not support Geolocation</div>
        : !this.props.isGeolocationEnabled
          ? <div>Geolocation is not enabled</div>
          : this.props.coords
            ? <YourLocation lon={this.props.coords.longitude} lat={this.props.coords.latitude} />
            : <div>Getting the location data&hellip; </div>;
    }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(LoadLocation);
