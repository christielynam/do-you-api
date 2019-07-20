import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './styles.scss'
import lightbulbs from '../../assets/no-back.png'

class Header extends Component {

  handleRouteHome = () => {
    const { user, history } = this.props
    if (user.id) {
      history.push('/controls')
    } else {
      history.push('/')
    }
  }

  render() {
    return (
      <div className='header'>
      <div className='header-text'>
        <Link to='/'
          className='home-page'
          onClick={ (e) => {
            e.preventDefault();
            // props.removeTestResultsFromStore();
            // props.removeSlidesFromStore();
            // props.removeFetchedAssessment();
            this.handleRouteHome();
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
}

export const mapStateToProps = state => ({
  user: state.user
})

export const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
