'use strict'

import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'

import { CHANGE_MESSAGE } from '../actions'

const reducer = (state, action) => {
  const defaultState = {
    message: 'default message for store'
  }

  if (state === undefined) {
    state = defaultState
  }

  switch(action.type) {
    case CHANGE_MESSAGE:
      return { message: action.message }
    default:
      return state
  }
}

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(createLogger())
  )

  return store
}
