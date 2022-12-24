import redux from 'redux'
const createStore = redux.createStore

// Action type
const BUY_CAKE = 'BUY_CAKE'

// Action creator function that returns an object
function buyCake() {
  return {
    type: BUY_CAKE
  }
}

const initialState = {
  numberOfCakes: 10
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
      ...state,
      numberOfCakes: state.numberOfCakes - 1
    }

    default: return state
  }
}

const store = createStore(reducer)

console.log('Initial state', store.getState())

const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe()