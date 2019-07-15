import React from 'react'
import jwt from 'jwt-simple'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './styles.scss'
import wordcloudMan from '../../assets/wordcloud_man.png'
import Lightbulb from '../../components/Lightbulb'
import { setUser } from '../../actions'

const secret = 'xxx'

// const loggedIn = () => {
//   const token = window.location.href.split('=')[1];
//   return token ? token : false
// }

const LandingPage = () => {
  // const token = loggedIn()
  // console.log(token)

  // if (token) {
  //   const userObj = jwt.decode(token, secret, true)
  //   console.log(userObj)
  //   setUser([userObj])
  //   return(
  //     <Redirect to='/controls' />
  //   )
  // }

  return (
    <div className='landing-page'>
      <section className='hero-section'>
        <header className='landing-header'>
          <h1 className='main-title'>do you.</h1>
          <h3 className='main-tagline'>let your Personality shine.</h3>
        </header>
        <article className='mission-article'>
          <div className='wordcloud-container'>
            <img className='wordcloud-man' src={wordcloudMan} alt='wordcloud man' />
          </div>
          <div className='mission-statement'>
            <h6 className='purpose'>Recognizing and understanding your personality type can change the way you see yourself - which in turns affects everything you do and every aspect of your life. Please take any of our personality assessments to help you unlock your potential, find your passion, and DO YOU!</h6>
          </div>
        </article>
      </section>
      <section className='lightbulb-section'>
        <Lightbulb bulbNum={'bulb-one'} text={'sign up'} route={'/signup'} />
        <Lightbulb bulbNum={'bulb-two'} text={'personalities'} route={'/personality-types'}/>
        <Lightbulb bulbNum={'bulb-three'} text={'login'} route={'/login'} />
        <Lightbulb bulbNum={'bulb-four'} text={'assessments'} route={'/assessments'} />
    </section>
  </div>
    
  )
}

export const mapDispatchToProps = dispatch => ({
  setUser: (user) => dispatch(setUser(user))
})

export default connect(null, mapDispatchToProps)(LandingPage)