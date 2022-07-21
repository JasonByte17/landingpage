import { RESET_DATA, SUSCRIBE_ERROR, SUSCRIBE_REQUESTED, SUSCRIBE_SUCCESS } from "../actions";

const INIT_STATE = {
  loading: false,
  error: '',
  success: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SUSCRIBE_REQUESTED:
      return { ...state, loading: true, error: '' };
    case SUSCRIBE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: '',
      };
    case SUSCRIBE_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload.msg,
      };
    case RESET_DATA:
      return {
        ...state,
        loading: false,
        error: '',
        success: true
      };
    default:
      return { ...state };
  }
};