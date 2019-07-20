import React from 'react'
import './PersonalityTypeContainer.scss'
import PersonalityCard from '../PersonalityCard'

const PersonalityTypeContainer = ({ name, badges }) => {
  const displayCareerTypes = badges.map(object => (
    <PersonalityCard key={object.personality_type} {...object} /> 
  ))

  return (
    <div className='types-container'>
      <h4 className='type-title'>{name}</h4>
      <div className='grid-container'>
        {displayCareerTypes}
      </div>
    </div>
  )
}

export default PersonalityTypeContainer