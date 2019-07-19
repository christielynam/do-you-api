import React, { Component } from 'react';
import './PersonalityTypes.scss';
import { connect } from 'react-redux';
import { fetchPersonalities } from '../../thunks/fetchPersonalities'
import PersonalityTypeContainer from '../../components/PersonalityTypeContainer'
import Loading from '../../components/Loading';
import Error from '../Error';

class PersonalityTypes extends Component {
  constructor() {
    super();
    this.state = {
      personalitiesArray: []
    };
  }

  componentDidMount() {
    this.props.fetchPersonalities();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.fetchedPersonalities.length > 0) {
      this.setState({ personalitiesArray: nextProps.fetchedPersonalities });
    }
  }

  handleTypesDisplay() {
    const { personalitiesArray } = this.state;
    if (personalitiesArray.length) {
      return personalitiesArray.map( object => <PersonalityTypeContainer key={object.id} { ...object } /> )
    }
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
  error: state.error
})

export const mapDispatchToProps = dispatch => ({
  fetchPersonalities: () => dispatch(fetchPersonalities())
})

export default connect(mapStateToProps, mapDispatchToProps)(PersonalityTypes)
