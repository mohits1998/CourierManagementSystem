import { createStore, combineReducers, applyMiddleware } from 'redux'
import { userSignupReducer, userSigninReducer, userAuthenticateReducer } from './reducers/userReducers'
import { addNotesReducer, fetchNotesReducer } from './reducers/notesReducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// combined reducers
const reducers = combineReducers({
  userSignup: userSignupReducer,
  userAuthenticate: userAuthenticateReducer,
  userSignin: userSigninReducer,
  addNotes: addNotesReducer,
  notes: fetchNotesReducer,
})

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store
