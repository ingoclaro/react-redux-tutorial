'use strict'

import React, { PropTypes, Component } from 'react'

export default class Info extends Component {
  render() {
    return (
      <div>
        {this.props.message}
      </div>
    )
  }
}

Info.propTypes = {
  message: PropTypes.string.isRequired
}
