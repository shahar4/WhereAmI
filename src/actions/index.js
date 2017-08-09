import axios from 'axios';

export const FIND_LOC = 'FIND_LOC';
export const FETCH_LIST = 'FETCH_LIST';
export const FETCH_SUM = 'FETCH_SUM';

export function findLocation(lat, lon) {
   const location = {
     latitude: lat,
     longitude: lon
   }

  return {
    type: FIND_LOC,
    payload: location
  };
}

export function fetcList(lat, lon, radius = '10000') {
  const ROOT_URL = 'https://en.wikipedia.org/w/api.php?origin=*&action=query&list=geosearch';
  const COORDS = `&gscoord=${lat}%7C${lon}`;
  //const COORDS = `&gscoord=40.76382064819336%7C-73.97296905517578`;
  const ENDING = `&gsradius=${radius}&gslimit=10&format=json`; //radius needs to be specified by scarcity of articles around user.

  //axios does an ajax request and returns a promise, which we pass to the action's payload
  const request = axios.get(`${ROOT_URL}${COORDS}${ENDING}`);

  return{
    type: FETCH_LIST,
    payload: request
  };
}

export function fetchSummary(pageid){

  const ROOT_URL = `https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro=&explaintext=&pageids=${pageid}`;
  const request = axios.get(ROOT_URL);

  return {
    type: FETCH_SUM,
    payload: request
  };
}
