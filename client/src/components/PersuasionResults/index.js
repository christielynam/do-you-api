import React from 'react'
import './ResultsPersuasion.scss'

const PersuasionResults = ({ personality_types }) => {

  const persuasionMatches = personality_types.map( type => {
    const { name, description, badge, keywords } = type.personality_type
    return (
      <div className='personality-card'>
        <img src={ badge.image_small } alt="personality-icon"/>
        <h3>{ name }</h3>
        <h4>Match Score: { Math.round(type.score * 1000)/1000 }</h4>
        <div className='description-text'>
          <p className='text'>{ description }</p>
          <p className='text traits'>Key Traits: { keywords }</p>
        </div>
      </div>
    )
  })

  return (
    <div className='persuasion-type'>
      <h2>Your personality</h2>
      <div className='personality-matches'>
        { persuasionMatches }
      </div>
    </div>
  )
}

export default PersuasionResults
