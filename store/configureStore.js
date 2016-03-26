'use strict'

import { createStore } from 'redux'

const reducer = (state, action) => {
  const defaultState = {
    message: 'default message for store'
  }

  if (state === undefined) {
    state = defaultState;
  }

  return state;
}

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState
  )

  return store
}
