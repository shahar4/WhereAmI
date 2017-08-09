import React, { Component } from 'react';
import { connect } from 'react-redux';

import GoogleMap from './google_map';
import { findLocation } from '../actions'


class YourLocation extends Component {
  //We passed this component lat & lon as props. Here we pass them to the action
  //creator so they are in the state store.
  componentDidMount(){
    this.props.findLocation(this.props.lat, this.props.lon);
  }

  render() {
    let lon = parseFloat(this.props.location.longitude);
    let lat = parseFloat(this.props.location.latitude);
    return(
      <div>
        {status}
        <ul className="list-group">
          <li className="list-group-item">
            <h3>You are in: </h3>
            <div>
              <table>
                <tbody>
                  <tr key={lat}>
                    <td><GoogleMap lon={lon} lat={lat} /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { location: state.location };
}

export default connect(mapStateToProps, { findLocation })(YourLocation);

// <ul className="list-group">
//   <li className="list-group-item">
//     <h3>Choose one: </h3>
//     <ArticlesList lon={lon} lat={lat} />
//   </li>
// </ul>

// <table>
//   <tbody>
//     <tr key={lat}>
//       <td><GoogleMap lon={lon} lat={lat} /></td>
//     </tr>
//   </tbody>
// </table>
