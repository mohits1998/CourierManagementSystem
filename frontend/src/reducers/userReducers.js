import {
  USER_AUTHENTICATE_FAIL,
  USER_AUTHENTICATE_REQUEST,
  USER_AUTHENTICATE_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from '../constants/userConstants'

export const userSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { loading: true }
    case USER_SIGNUP_SUCCESS:
      return { loading: false, response: action.payload }
    case USER_SIGNUP_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true }
    case USER_SIGNIN_SUCCESS:
      return { loading: false, response: action.payload }
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload }
    case USER_SIGNOUT:
      return {}
    default:
      return state
  }
}

export const userAuthenticateReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_AUTHENTICATE_REQUEST:
      return { loading: true }
    case USER_AUTHENTICATE_SUCCESS:
      return { loading: false, response: action.payload }
    case USER_AUTHENTICATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}