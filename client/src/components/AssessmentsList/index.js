import React from 'react'
import { Link } from 'react-router-dom'
import './AssessmentsList.scss'

const AssessmentsList = () => (
  <div className='background-container'>
    <div className='list-container'>
      <h1 className='assessment-list-heading'>take an assessment.</h1>
      <div className="test-link-container">
        <Link to="/assessments/core" className='link'>
        core.
        </Link>
        <Link to="/assessments/career" className='link'>
        career.
        </Link>
        <Link to="/assessments/intro-extro" className='link'>
        intro/extro.
        </Link>
        <Link to="/assessments/heroes" className='link'>
        heroes.
        </Link>
        <Link to="/assessments/movies" className='link'>
        movies.
        </Link>
        <Link to="/assessments/persuasion" className='link'>
          persuasion.
        </Link>
      </div>
    </div>
  </div>
)

export default AssessmentsList
