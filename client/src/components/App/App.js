import React from 'react'
import './App.scss'
import { Route, Switch } from 'react-router-dom'
import LandingPage from '../../containers/LandingPage'
import Header from '../../containers/Header'
import Login from '../../containers/Login'
import Signup from '../../containers/Signup'
import Controls from '../../containers/Controls'
// import Profile from '../../containers/Profile'
import PersonalityTypes from '../../containers/PersonalityTypes'
import AssessmentsList from '../AssessmentsList'

const App = () => (
  <div className='App'>
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route path='/' component={Header} />
    </Switch>
    <Route exact path='/login' component={Login} />
    <Route exact path='/signup' component={Signup} />
    <Route exact path='/controls' component={Controls} />
    {/* {/* <Route exact path='/profile' component={Profile} /> */}
    <Route exact path='/personality-types' component={PersonalityTypes} />
    <Route exact path='/assessments' component={AssessmentsList} />
  </div>
)


export default App
