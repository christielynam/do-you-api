import React from 'react'
import './PersonalityCard.scss'

const PersonalityCard = ({personality_type, description}) => {
  return (
    <article className='type'>
      <h3>{personality_type}.</h3>
      <div className='description-content'>
        <p className='type-text'>{description}</p>
      </div>
    </article>
  );
}

export default PersonalityCard;
