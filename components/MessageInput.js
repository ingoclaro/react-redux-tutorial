import React, { Component, PropTypes } from 'react'

export default class MessageInput extends Component {
  render() {
    const { value, onChange } = this.props

    return (
      <span>
        <input type='text' onChange={e => onChange(e.target.value)} value={value} />
      </span>
    )
  }
}

MessageInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
