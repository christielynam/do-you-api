import React from 'react';
import { connect } from 'react-redux'

const Error = () => {
  return (
    <p>{this.props.error}</p>
  )
}

export const mapStateToProps = state => ({
  error: state.error
})

export default connect(mapStateToProps)(Error)