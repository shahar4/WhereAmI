import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    let coords = {
      lat: this.props.lat,
      lng: this.props.lon
    };
    let myMap = new google.maps.Map(this.refs.map, {
      zoom: 15,
      center: coords
    });
    let marker = new google.maps.Marker({
      position: coords,
      map: myMap
    });
  }

  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;

// componentDidMount() {
//   new google.maps.Map(this.refs.map, {
//     zoom: 15,
//     center: {
//       lat: this.props.lat,
//       lng: this.props.lon
//     }
//   });
//
// }
