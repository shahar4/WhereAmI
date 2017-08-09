import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetcList } from '../actions';

class ArticlesList extends Component {
  componentDidUpdate() {
    let lon = parseFloat(this.props.location.longitude);
    let lat = parseFloat(this.props.location.latitude);

    if(!isNaN(lat) && this.props.list.length == 0) {
      this.props.fetcList(lat, lon);
      console.log(this.props.list);
    }
  }

  renderTitles() {
    return _.map(this.props.list, object => {
      return (
        <li className="list-group-item" key={object.pageid}>
          <Link className="btn btn-default" to={`/places/${object.pageid}`}>
            {object.title}
          </Link>
        </li>
      );
    });
  }

  render() {
    // if(this.props.list.length >0 )
    //   console.log(this.props.list);
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            <h3>Choose one: </h3>
            <ul className="list-group">
              {this.renderTitles()}
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    location: state.location,
    list: state.list
  };
}

export default connect(mapStateToProps, { fetcList })(ArticlesList);
