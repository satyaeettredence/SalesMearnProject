import { FETCH_SALES_BEGIN, FETCH_SALES_SUCCESS, FETCH_SALES_FAILURE } from '../initState/salesActionInit';

export const fetchSALESBegin = () => ({
  type: FETCH_SALES_BEGIN
});

export const fetchSALESSuccess = SALES => ({
  type: FETCH_SALES_SUCCESS,
  payload: { SALES }
});

export const fetchSALESFailure = error => ({
  type: FETCH_SALES_FAILURE,
  payload: { error }
});