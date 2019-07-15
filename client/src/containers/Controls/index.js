import React from 'react';
import { Link } from 'react-router-dom';
// import fetchContainer from '../../containers/fetch-container';
import './styles.scss';

const handleSignOut = (props) => {
  // localStorage.removeItem('user');
  // props.removeTestsFromStore();
  // props.removeTestResultsFromStore();
  // props.removeUserFromStore();
}

const Controls = (props) => {
  const { user } = props
  const userName = user ? `${user.name.toUpperCase()}` : 'user'

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
  );
};

export default Controls;
