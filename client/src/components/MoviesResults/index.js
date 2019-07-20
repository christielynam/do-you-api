import React from 'react'
import './ResultsMovies.scss'

const MoviesResults = ({ personality_blend, personality_types }) => {

  const personalityMatches = personality_types.map( type => {
    const { name, description, badge, keywords } = type.personality_type
    return (
      <div className='personality-card'>
        <img src={ badge.image_small } alt="personality-icon"/>
        <h3>{ name }</h3>
        <h4>Match Score: { Math.round(type.score * 1000)/1000 }</h4>
        <div className="description-text">
          <p className='text'>{ description }</p>
          <p className='text traits'>Key Traits: { keywords }</p>
        </div>
      </div>
    )
  })

  return (
    <div className='movies-type'>
      <div className='blend'>
        <h2>Personality Blend</h2>
        <div className='blend-images'>
          <img src={ personality_blend.personality_type_1.badge.image_small } alt="badge"/>
          <img src={ personality_blend.personality_type_2.badge.image_small } alt="badge"/>
        </div>
        <div className='blend-text'>
          <h4>{ personality_blend.name }</h4>
          <p>{ personality_blend.description }</p>
        </div>
      </div>
      <h2>Your personality</h2>
      <div className="personality-matches">
        { personalityMatches }
      </div>
    </div>
  )
}

export default MoviesResults
