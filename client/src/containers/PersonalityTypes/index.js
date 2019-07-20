import React, { Component } from 'react';
import './PersonalityTypes.scss';
import { connect } from 'react-redux';
import { fetchPersonalities } from '../../thunks/fetchPersonalities'
import PersonalityTypeContainer from '../../components/PersonalityTypeContainer'
import Loading from '../../components/Loading';
import Error from '../Error';

class PersonalityTypes extends Component {
  
  componentDidMount() {
    const { personalities, fetchPersonalities } = this.props
    !personalities.length && fetchPersonalities();
  }

  handleTypesDisplay() {
    const { personalities } = this.props;
    return personalities.map(personality => (
    <PersonalityTypeContainer key={personality.id} {...personality} />
    )) 
  }

  render() {
    const { loading, error } = this.props;

    return (
      <div className='background-container'>
        <div className='personality-container'>
          <h2 className='personality-title'>
            personality types.
          </h2>
          {loading && <Loading />}
          {error && <Error />}
          {this.handleTypesDisplay()}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  loading: state.loading,
  error: state.error,
  personalities: state.personalities
})

export const mapDispatchToProps = dispatch => ({
  fetchPersonalities: () => dispatch(fetchPersonalities())
})

export default connect(mapStateToProps, mapDispatchToProps)(PersonalityTypes)
