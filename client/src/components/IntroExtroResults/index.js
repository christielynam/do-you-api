import React from 'react'
import './ResultsIntroExtro.scss'

const IntroExtroResults = ({ personality_types }) => {

  const introExtroDisplay = personality_types.map( object => {
    return (
      <div className='intro-extro-type'
           key={ object.personality_type.name }>
        <div className='main-info'>
          <div className='title-container'>
            <img src={ object.personality_type.badge.image_small } alt="badge"/>
            <h4>{ object.personality_type.name }</h4>
          </div>
          <p>{ object.personality_type.description }</p>
          <h4 className='score-info'>Score: { Math.round(object.score * 1000)/1000 }</h4>
        </div>
        <div className='extra-info'>
          <h4>{ object.personality_type.details[0].title}</h4>
          <p>{ object.personality_type.details[0].body}</p>
          <p><span className='keywords'>Keywords:</span> { object.personality_type.keywords}</p>
        </div>
      </div>
    )
  })

  return (
    <div className='intro-extro-container'>
      { introExtroDisplay }
    </div>
  )
}

export default IntroExtroResults
