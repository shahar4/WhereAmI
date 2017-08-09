import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSummary } from '../actions'

import GoogleMap from './google_map';

class ShowSummary extends Component {
  componentDidMount() {
    const { pageid } = this.props.match.params;
    this.props.fetchSummary(pageid);
    }

  render() {
    let lon = parseFloat(this.props.location.longitude);
    let lat = parseFloat(this.props.location.latitude);

    const { pageid } = this.props.match.params;
    const x = this.props.summary[pageid];
    if (x) {
      return (
        <div>
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
        <ul className="list-group">
          <li className="list-group-item">
            <div className="summaryExtract">
              <h3>A bit about it:</h3>
              {x.extract}
            </div>
          </li>
        </ul>
        </div>
      );
    }
    return (
      <div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    summary: state.summary,
    location: state.location
  };
}

export default connect(mapStateToProps, { fetchSummary })(ShowSummary);


//{this.props.summary.pageid.extract}
