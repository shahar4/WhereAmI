import { FETCH_LIST, FETCH_SUM } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {

  case FETCH_LIST:
    return action.payload.data.query.geosearch;

  }

  return state;
}
