import React, { Component } from 'react'
import './Assessments.scss'
import Loading from '../../components/Loading'
import { fetchAssessment } from '../../thunks/fetchAssessment'
import { fetchSlides } from '../../thunks/fetchSlides'
import { setResults } from '../../actions'
import { updateSlideResponse } from '../../thunks/updateSlideResponse'
// import Results from '../Results/Results';
import Slide from '../../components/Slide'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Assessments extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      loggedIn: true,
    }
  }

  async componentDidMount() {
    const { user, testType, fetchAssessment } = this.props;
    !user && this.setState({loggedIn: false})
    await fetchAssessment(testType)
  }

  componentDidUpdate(prevProps) {
    const { assessment, fetchSlides } = this.props
    if(assessment !== prevProps.assessment) {
      fetchSlides(assessment.id)
    }
  }
  
  // TODO get rid of CWRP
  // async componentWillReceiveProps(nextProps) {
    //   const objectKeys = Object.keys(nextProps.assessment)
    //   const { user, setResults } = this.props
    
    //   if (objectKeys.length && !this.props.slides.length) {
      //     const { id, deck_id } = nextProps.assessment
      //     await this.storeTestInfo(id, deck_id, user.id)
      //     setResults(id);
      //   }
      // }
      
  manageSlideUpdate = async (trait, boolean) => {
    const { assessment, updateSlideResponse } = this.props;
    trait.response = boolean;
    await updateSlideResponse(trait, assessment.id);
    this.setState({ counter: this.state.counter + 1 })
  }
      
  storeTestInfo = async (test_id, deck_id, user_id) => {
    const url = 'http://localhost:3000/api/v1/results'
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({ test_id, deck_id, user_id })
      })
    return await response.json()
  }
            
  handleSlideDisplay(slideToRender) {
    const { slides } = this.props;
    if (slides.length) {
      return slideToRender ?
        <Slide
          slideData={slideToRender}
          manageSlideUpdate={this.manageSlideUpdate}
        />
      :
      <div className='completion-container'>
        <h3 className='completion-message'>You have completed your assessment!</h3>
        <Link to='/results' className='results-link'>
          View your results
        </Link>
      </div>
    } 
  }
  
  render() {
    const { slides } = this.props;
    const slideToRender = slides[this.state.counter];
    if (!this.state.loggedIn) {
      return <Redirect to='/login' />
    }

    return (
      <div className='slide-container'>
        {!slides.length && <Loading />}
        {this.handleSlideDisplay(slideToRender)}
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  user: state.user,
  slides: state.slides,
  loading: state.loading,
  assessment: state.assessment
})

export const mapDispatchToProps = dispatch => ({
  fetchAssessment: (testType) => dispatch(fetchAssessment(testType)),
  fetchSlides: (testId) => dispatch(fetchSlides(testId)),
  setResults: (results) => dispatch(setResults(results)),
  updateSlideResponse: (slide, testId) => dispatch(updateSlideResponse(slide, testId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Assessments);
