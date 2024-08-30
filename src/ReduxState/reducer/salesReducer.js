import { FETCH_SALES_BEGIN, FETCH_SALES_SUCCESS, FETCH_SALES_FAILURE } from '../initState/salesActionInit';

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function userReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_SALES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_SALES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.SALES
      };

    case FETCH_SALES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    default:
      return state;
  }
}