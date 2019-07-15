import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUserToDB } from '../../thunks/adduserToDB'
// import { fetchUserFromDB } from '../../utils/usersAPI';
import { Redirect } from 'react-router-dom';
import './styles.scss';

class Signup extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      loggedIn: false,
      instruction: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== {}) {
      this.setState({ loggedIn: true })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  validatePassword() {
    const { password, confirmPassword } = this.state
    return (password === confirmPassword) ? true : false
  }

  resetForm = () => {
    this.setState({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
  }

  handleSubmit = (e) => {
    const { name, email, password } = this.state
    e.preventDefault();
    let didMatch = this.validatePassword();
    if(didMatch) {
      this.props.addUserToDB(name, email, password)
      this.resetForm()
    } else {
      this.setState({
        instruction: 'Something went wrong... Please verify that you have entered the correct password',
        password: '',
        confirmPassword: ''
      })
    }
  }

  render() {
    const { name, email, password, confirmPassword, loggedIn, instruction } = this.state

    if (loggedIn) {
      return (
        <Redirect to='/controls' />
      )
    }

    return(
      <section className='container'>
        <div className='signup-container'>

          <form
            className='create-user-form'
            onSubmit={this.handleSubmit}
          >
            <h3 className='create-account-heading'>
              Create New Account
            </h3>
            <input
              className='newuser-name'
              type='text'
              name='name'
              placeholder='name'
              autoFocus value={name}
              onChange={this.handleChange}
            />
            <input
              className='newuser-email'
              type='email'
              name='email'
              placeholder='email'
              value={email}
              onChange={this.handleChange}
            />
            <input
              className='newuser-password'
              type='password'
              name='password'
              placeholder='password'
              value={password}
              onChange={this.handleChange}
            />
            <input
              className='newuser-password confirm-password'
              type='password'
              name='confirmPassword'
              placeholder='confirm password' 
              value={confirmPassword}
              onChange={this.handleChange}
            />
            <p>{instruction}</p>
            <button
              className='signup-btn'
              type='submit'
              disabled={!name || !email || !password || !confirmPassword}>
              Sign Up
            </button>
          </form>

        <div className='social-media-container'>
          <h3 className='social-media-heading'>
            Sign Up thru Social Media
          </h3>
          <div className='social-media-buttons'>
            <button className='facebook-btn'>
              Sign Up With Facebook
            </button>
          </div>
        </div>
        </div>
      </section>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  addUserToDB: (name, email, password) => dispatch(addUserToDB(name, email, password))
})

export default connect(null, mapDispatchToProps)(Signup);
