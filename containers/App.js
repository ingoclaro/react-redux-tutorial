'use strict'

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeMessage } from '../actions'
import Info from '../components/Info'
import MessageInput from '../components/MessageInput'

class App extends Component {

  handleChange(message) {
    this.props.changeMessage(message)
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

function mapDispatchToProps(dispatch) {
  return { changeMessage: bindActionCreators(changeMessage, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
