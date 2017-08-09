import { FETCH_SUM } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {

  case FETCH_SUM:
    return action.payload.data.query.pages;

  }

  return state;
}
