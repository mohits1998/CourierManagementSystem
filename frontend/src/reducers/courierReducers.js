import {
  COURIER_ADD_REQUEST,
  COURIER_ADD_SUCCESS,
  COURIER_ADD_FAIL,
  COURIER_ADD_RESET,
  COURIER_FETCH_REQUEST,
  COURIER_FETCH_SUCCESS,
  COURIER_FETCH_FAIL,
  COURIER_FETCH_RESET,
} from '../constants/courierConstants'

export const addCourierReducer = (state = {}, action) => {
  switch (action.type) {
    case COURIER_ADD_REQUEST:
      return { loading: true }
    case COURIER_ADD_SUCCESS:
      return { loading: false, response: action.payload }
    case COURIER_ADD_FAIL:
      return { loading: false, error: action.payload }
    case COURIER_ADD_RESET:
      return {}
    default:
      return state
  }
}

export const fetchCourierReducer = (state = {}, action) => {
  switch (action.type) {
    case COURIER_FETCH_REQUEST:
      return { loading: true }
    case COURIER_FETCH_SUCCESS:
      return { loading: false, response: action.payload }
    case COURIER_FETCH_FAIL:
      return { loading: false, error: action.payload }
    case COURIER_FETCH_RESET:
      return {}
    default:
      return state
  }
}
