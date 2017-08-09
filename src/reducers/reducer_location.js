import { FIND_LOC } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {

  case FIND_LOC:
    return action.payload;

  }

  return state;
}
