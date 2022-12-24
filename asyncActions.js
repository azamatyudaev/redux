const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const createStore = redux.createStore
const axios = require('axios')
const applyMiddleware = redux.applyMiddleware

const initialState = {
  loading: false,
  users: [],
  error: ''
}

// Action types
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

// Action creators
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

const fetchUsers = () => {
  return function(dispatch) {
    dispatch(fetchUsersRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // response.data is the array of users
        const users = response
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        // error.message is the error description
        dispatch(fetchUsersFailure(error.message))
      })
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USERS_REQUEST: return {
      ...state,
      loading: true
    }

    case FETCH_USERS_SUCCESS: return {
      loading: false,
      users: action.payload,
      error: ''
    }

    case FETCH_USERS_FAILURE: return {
      loading: false,
      users: [],
      error: action.payload
    }
  }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(fetchUsers())