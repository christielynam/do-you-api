import React, { Component } from 'react'
import Loading from '../../components/Loading'
import Error from '../Error'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { fetchAllTests } from '../../thunks/fetchAllTests'
import { fetchResults } from '../../thunks/fetchResults'
import './Profile.scss';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      testsArray: [],
      testComplete: ''
    }
  }

  componentDidMount() {
    const { fetchAllTests, user } = this.props
    fetchAllTests(user.id)
  }

  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.tests) {
  //     this.setState({ testsArray: nextProps.tests })
  //   }
  //   if(nextProps.results) {
  //     this.setState({ testComplete: 'complete' })
  //   }
  //   if(nextProps.slides.length) {
  //     this.setState({ testComplete: 'incomplete' })
  //   }
  // }

  // recentAssessments() {
  //   const { testsArray } = this.state;
  //   if (testsArray.length) {
  //     return testsArray.map(test => {
  //       return (
  //         <button
  //           className='test-btn'
  //           key={ test.id }
  //           onClick={() => this.handleRecentTest(test)}>
  //           <p className='test-type'>{ test.deck_id }</p>
  //           <p>{test.created_at.split('T')[0]}</p>
  //         </button>
  //       )
  //     })
  //   }
  // }

  handleRecentTest = (test) => {
    this.props.fetchResults(test.test_id);
  }

  render() {
    const { error, loading } = this.props;
    switch (this.state.testComplete) {
      case 'complete':
        return <Redirect to='/results' />
      case 'incomplete':
        return <Redirect to='/assessments/core' />
      default:
        break
    }

    return (
      <div className='background-container'>
        <div className='profile-container'>
          <h1>your recent assessments.</h1>
          <div className='tests-container'>
            {/* {loading && <Loading />} */}
            {/* {error && <Error />}   */}
            {/* { this.recentAssessments() } */}
          </div>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  loading: state.loading,
  error: state.error,
  user: state.user,
  tests: state.tests,
  slides: state.slides,
  results: state.results
})

export const mapDispatchToProps = dispatch => ({
  fetchAllTests: (userId) => dispatch(fetchAllTests(userId)),
  fetchResults: (testId) => dispatch(fetchResults(testId))
})

 export default connect(mapStateToProps, mapDispatchToProps)(Profile)
