import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom'
import { fetchUserFromDB } from '../../thunks/fetchUserFromDB'
import './styles.scss'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      loggedIn: false
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  updateLocalStorage(user) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  loginUser = (e) => {
    const { email, password } = this.state
    e.preventDefault()
    this.props.fetchUserFromDB(email, password)
  }
  
  componentDidUpdate(prevProps) {
    const { user } = this.props
    if (user !== prevProps.user) {
      this.setState({ loggedIn: true })
      this.updateLocalStorage(user)
    }
  }

  render() {
    const {email, password, loggedIn} = this.state

    if (loggedIn) {
      return (
        <Redirect to='/controls' />
      )
    }

    return(
      <div className='login-container'>
        <div className='input-container'>
          <form onSubmit={this.loginUser}>
            <h2 className='login-text'>
              Login To Your Account
            </h2>
            <input
              className='email-input'
              name='email'
              placeholder='email address'
              autoFocus
              value={email}
              onChange={this.handleChange}
            />
            <input
              className='password-input'
              placeholder='password'
              name='password'
              type='password'
              value={password}
              onChange={this.handleChange}
            />
            <input
              className='sign-in-btn'
              type='submit'
              name='submit'
              value='Log in'
              disabled={!email || !password}
            />
            <h2 className='sign-up-text'>
              Don't Have An Account?
              <Link className='signup-link'
                to='/signup'>
                Sign Up!
              </Link>
            </h2>
          </form>
      </div>
    </div>
    )
  }
}

export const mapStateToProps = state => ({
  user: state.user
})

export const mapDispatchToProps = dispatch => ({
  fetchUserFromDB: (email, pw) => dispatch(fetchUserFromDB(email, pw))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
