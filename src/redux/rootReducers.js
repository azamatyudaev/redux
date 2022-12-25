import { combineReducers } from "redux";
import cakeReducer from './features/cakes/cakeReducers'
import iceCreamReducer from './features/iceCreams/iceCreamReducers'

export const rootReducers = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})