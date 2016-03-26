'use strict'

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Info from '../components/Info'

class App extends Component {

  render() {
    let message = 'message from App'
    message = this.props.message

    return (
      <div>
        <Info message={message} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { message } = state

  return {
    message,
  }
}

export default connect(mapStateToProps)(App)
