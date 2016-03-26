'use strict'

import React, { Component, PropTypes } from 'react'
import Info from '../components/Info'

class App extends Component {

  render() {
    let message = 'message from App'
    let state = this.props.store.getState()
    message = state.message

    return (
      <div>
        <Info message={message} />
      </div>
    )
  }
}

export default App
