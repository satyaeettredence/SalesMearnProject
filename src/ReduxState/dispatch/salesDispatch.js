import { fetchSALESBegin, fetchSALESSuccess, fetchSALESFailure } from '../action/salesAction';

export function fetchSales() {
  return dispatch => {
    dispatch(fetchSALESBegin());
    return fetch("http://localhost:3030/sales")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchSALESSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchSALESFailure(error)));
  };
}

// Helper function for error handling
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}