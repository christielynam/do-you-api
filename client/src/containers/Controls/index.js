import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { removeUser, removeResults, removeSlides, removeAssessment } from '../../actions'
import './styles.scss';

const handleSignOut = () => {
  const { removeUser, removeResults, removeSlides, removeAssessment } = this.props
  // localStorage.removeItem('user');
  removeUser()
  removeResults()
  removeSlides()
  removeAssessment()
}

const Controls = (props) => {
  const { user } = props
  const userName = user.id ? `${user.name.toUpperCase()}` : 'user'

  return(
    <div className='outer-container'>
      <div className='controls-container'>
        <div className='welcome-container'>
          <h2 className='welcome-msg'>Welcome, {userName}!</h2>
            <Link className='sign-out-link' to='/'><button className='sign-out-btn' onClick={() => handleSignOut(props)}>
              Sign Out
            </button>
            </Link>
        </div>
        <div className='controls-links'>
          <Link to='/profile'
                className='profile-page'>
                my profile.
          </Link>
          <Link to='/personality-types'
                className='personality-types-page'>
                personalities.
          </Link>
          <Link to='/assessments'
                className='assessments-page'>
                assessments.
          </Link>
        </div>
        </div>
      </div>
  )
}

export const mapStateToProps = state => ({
  user: state.user
})

export const mapDispatchToProps = dispatch => ({
  removeUser: () => dispatch(removeUser()),
  removeResults: () => dispatch(removeResults()),
  removeAssessment: () => dispatch(removeAssessment()),
  removeSlides: () => dispatch(removeSlides())
})


export default connect(mapStateToProps)(Controls)
