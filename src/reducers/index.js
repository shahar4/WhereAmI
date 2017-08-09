import { combineReducers } from 'redux';
import LocationReducer from './reducer_location';
import ListReducer from './reducer_list';
import SummaryReducer from './reducer_summary';

const rootReducer = combineReducers({
  location: LocationReducer,
  list: ListReducer,
  summary: SummaryReducer
});

export default rootReducer;
