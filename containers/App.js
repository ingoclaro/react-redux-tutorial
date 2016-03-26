'use strict'

import React, { Component, PropTypes } from 'react'
import Info from '../components/Info'

class App extends Component {

  render() {
    let message = 'message from App'

    return (
      <div>
        <Info message={message} />
      </div>
    )
  }
}

export default App
