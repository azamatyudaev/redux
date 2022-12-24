import { createStore } from 'redux'
import cakeReducer from './features/cakes/cakeReducer'

const store = createStore(cakeReducer)

export default store