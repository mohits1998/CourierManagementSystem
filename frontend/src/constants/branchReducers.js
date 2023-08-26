import {
    BRANCH_ADD_REQUEST,
    BRANCH_ADD_SUCCESS,
    BRANCH_ADD_FAIL,
    BRANCH_ADD_RESET,
    BRANCH_FETCH_REQUEST,
    BRANCH_FETCH_SUCCESS,
    BRANCH_FETCH_FAIL,
    BRANCH_FETCH_RESET,
  } from '../constants/branchContants'
  
  export const addBranchReducer = (state = {}, action) => {
    switch (action.type) {
      case BRANCH_ADD_REQUEST:
        return { loading: true }
      case BRANCH_ADD_SUCCESS:
        return { loading: false, response: action.payload }
      case BRANCH_ADD_FAIL:
        return { loading: false, error: action.payload }
      case BRANCH_ADD_RESET:
        return {}
      default:
        return state
    }
  }
  
  export const fetchBranchReducer = (state = {}, action) => {
    switch (action.type) {
      case BRANCH_FETCH_REQUEST:
        return { loading: true }
      case BRANCH_FETCH_SUCCESS:
        return { loading: false, response: action.payload }
      case BRANCH_FETCH_FAIL:
        return { loading: false, error: action.payload }
      case BRANCH_FETCH_RESET:
        return {}
      default:
        return state
    }
  }
  