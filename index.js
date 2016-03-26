'use strict'

import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
const rootEl = document.getElementById('root')

let render = () => {
  const App = require('./containers/App').default
  ReactDOM.render(
    <App />,
    rootEl
  )
}

if (module.hot) {
  // Support hot reloading of components
  // and display an overlay for runtime errors
  const renderApp = render
  const renderError = (error) => {
    const RedBox = require('redbox-react')
    ReactDOM.render(
      <RedBox error={error} />,
      rootEl
    )
  }
  render = () => {
    try {
      renderApp()
    } catch (error) {
      renderError(error)
    }
  }
  module.hot.accept('./containers/App', () => {
    setTimeout(render)
  })
}

render()
