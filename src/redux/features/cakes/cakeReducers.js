import { BUY_CAKE } from "./cakeTypes";

const initialState = {
  numberOfCakes: 11
}

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1
      }
  
    default: return state
  }
}

export default cakeReducer