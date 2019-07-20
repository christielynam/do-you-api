import React from 'react'
import './ResultsCore.scss'

const CoreResults = ({ personality_blend, personality_types, }) => {

  const complementConflict = personality_blend.details.map( object => {
    return (
      <div className='complement-conflict'>
        <h6>{ object.title }</h6>
        <p>{ object.body }</p>
      </div>
    )
  })

  const personalityMatches = personality_types.map( type => {
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
    <div className='core-type'>
      <div className='blend'>
        <div className='blend-heading'>
          <img src={ personality_blend.personality_type_1.badge.image_small } alt='badge'/>
          <h2>Personality Blend</h2>
          <img src={ personality_blend.personality_type_2.badge.image_small } alt='badge'/>
        </div>
        <div className='blend-text'>
          <h4>{ personality_blend.name }</h4>
          <p>{ personality_blend.description }</p>
        </div>
        <div className='blend-extra-info'>
          { complementConflict }
        </div>
      </div>
      <div className='personality-hits'>
        <h2>Your personality</h2>
        <div className='personality-matches'>
          { personalityMatches }
        </div>
      </div>
    </div>
  )
}

export default CoreResults
