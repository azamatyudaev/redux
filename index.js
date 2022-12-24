import redux from 'redux'
const createStore = redux.createStore

// Action types
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

// Action creators function that returns an object
function buyCake() {
  return {
    type: BUY_CAKE
  }
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM
  }
}

const initialCakeState = {
  numberOfCakes: 10
}

const initialIceCreamState = {
  numberOfIceCreams: 20
}

const CakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
      ...state,
      numberOfCakes: state.numberOfCakes - 1
    }

    default: return state
  }
}

const IceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numberOfIceCreams: state.numberOfIceCreams - 1
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
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()