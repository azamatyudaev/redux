import { combineReducers } from "redux";
import cakeReducer from './features/cakes/cakeReducers'
import iceCreamReducer from './features/iceCreams/iceCreamReducers'
import usersReducer from './features/users/usersReducers'

export const rootReducers = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  users: usersReducer
})