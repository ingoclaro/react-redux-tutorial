'use strict'

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { changeMessage } from '../actions'
import Info from '../components/Info'
import MessageInput from '../components/MessageInput'

class App extends Component {

  handleChange(message) {
    this.props.dispatch(changeMessage(message))
  }

  render() {
    let message = 'message from App'
    message = this.props.message

    return (
      <div>
        Input your message: <MessageInput value={message} onChange={this.handleChange.bind(this)} />
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
