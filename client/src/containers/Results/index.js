import React, { Component } from 'react'
import './Results.scss'
import { fetchResults } from '../../thunks/fetchResults'
// import ResultsIntroExtro from '../ResultsIntroExtro/ResultsIntroExtro'
// import ResultsCore from '../ResultsCore/ResultsCore'
// import ResultsCareer from '../ResultsCareer/ResultsCareer'
// import ResultsHeroes from '../ResultsHeroes/ResultsHeroes'
// import ResultsMovies from '../ResultsMovies/ResultsMovies'
// import ResultsPersuasion from '../ResultsPersuasion/ResultsPersuasion'
import { connect } from 'react-redux'

class Results extends Component {
  constructor() {
    super();
    this.state = {
      deckId: '',
    }
  }

  componentDidMount() {
    if (this.props.assessment !== {}) {
      this.props.fetchResults(this.props.assessment.id);
    }
  }

  componentDidUpdate(prevProps) {
    const { results } = this.props
    if (results !== prevProps.results) {
      this.setState({ deckId: results.deck_id })
    }
  }

  // handleResultsDisplay() {
  //   const { deckId } = this.state;
  //   const { assessmentResults } = this.props;

  //   switch (deckId) {
  //     case 'introvert-extrovert':
  //       return <ResultsIntroExtro { ...assessmentResults } />
  //     case 'career-deck' :
  //       return <ResultsCareer { ...assessmentResults } />
  //     case 'core':
  //       return <ResultsCore { ...assessmentResults } />
  //     case 'super-hero':
  //       return <ResultsHeroes { ...assessmentResults } />
  //     case 'persuasion':
  //       return <ResultsPersuasion { ...assessmentResults } />
  //     case 'movies':
  //       return <ResultsMovies { ...assessmentResults } />
  //     default:
  //       return <h4>No results available.</h4>
  //   }
  // }

  render() {

    return (
      <div className='outside-container'>
        <div className='inside-container'>
          <h2 className='results-title'>
            your assessment results.
          </h2>
          <div className='results-container'>
            {/* { this.handleResultsDisplay() } */}
          </div>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  assessment: state.assessment,
  results: state.results
})

export const mapDispatchToProps = dispatch => ({
  fetchResults: (testId) => dispatch(fetchResults(testId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Results)
