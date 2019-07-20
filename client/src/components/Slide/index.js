import React from 'react'
import './Slide.scss'

const Slide = ({ slideData, manageSlideUpdate }) => {
  const { caption, image_desktop_retina } = slideData
  
  return (
    <div>
      <h3 className='slide-caption'>{caption}</h3>
      <img className='slide-image' src={image_desktop_retina} alt="slide" />
      <div className='btn-container'>
        <button
          className='me-btn'
          onClick={() => manageSlideUpdate(slideData, true)}>
          Me
        </button>
        <button
          className='not-me-btn'
          onClick={() => manageSlideUpdate(slideData, false)}>
          Not Me
        </button>
      </div>
    </div>
  )
}

export default Slide
