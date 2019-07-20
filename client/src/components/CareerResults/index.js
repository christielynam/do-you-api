import React from 'react'
import './ResultsCareer.scss'

const CareerResults = ({ personality_blend, personality_types, career_matches}) => {

  const complementConflict = personality_blend.details.map( object => {
    return (
      <div className='complement-conflict'>
        <h6>{ object.title }</h6>
        <p>{ object.body }</p>
      </div>
    )
  })

  const careerMatches = career_matches.map( career => {
    const { title, picture, description } = career.career
    return (
      <div className='career-card'>
        <img src={ picture } alt='career'/>
        <h4>{ title }</h4>
        <h6>Match Score: { Math.round(career.score * 1000)/1000 }</h6>
        <div className="description-text">
          <p className='text'>{ description }</p>
        </div>
      </div>
    )
  })


  return (
    <div className='career-type'>
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
      <div className='career-matches'>
        <h2>Career Matches</h2>
        <div className='career-grid'>
          { careerMatches }
        </div>
      </div>
    </div>
  )
}

export default CareerResults
