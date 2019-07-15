import React from 'react';
import { Link } from 'react-router-dom';
// import fetchContainer from '../../containers/fetch-container';
import './styles.scss'
import lightbulbs from '../../assets/no-back.png'

// const handleRouteToHome = (props) => {
//   const { user, changeRoute } = props
//   if (user) {
//     changeRoute('/controls')
//   } else {
//     changeRoute('/')
//   }
// }

const Header = (props) => {
  return(
    <div className='header'>
      <div className='header-text'>
        <Link to='/'
          className='home-page'
          onClick={ (e) => {
            // e.preventDefault();
            // props.removeTestResultsFromStore();
            // props.removeSlidesFromStore();
            // props.removeFetchedAssessment();
            // handleRouteToHome(props);
          } }>
          <h1 className='app-title'>do you.</h1>
        </Link>
        <h3 className='app-tagline'>let your Personality shine.</h3>
      </div>
      <div className='lightbulb-container'>
        <img className='lightbulbs' src={lightbulbs} alt='hanging lightbulb logo' />
      </div>
    </div>
  )
}

export default Header;
