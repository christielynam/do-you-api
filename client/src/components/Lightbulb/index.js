import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'

const Lightbulb = ({ bulbNum, route, text }) => (
  <div className='bulb-link'>
      <svg className={`bulb ${bulbNum}`} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 119.51 386.54"><title>Lightbulb</title><path className="cls-1" d="M80.26,270.52H38.85a57.6,57.6,0,1,0,41.41,0Z"/><path className="cls-1" d="M35.77,268.52H83.33a3.56,3.56,0,1,0,0-7.12H35.77a3.56,3.56,0,0,0,0,7.13Z"/><path className="cls-1" d="M35.77,259.94H83.33a3.56,3.56,0,1,0,0-7.12H35.77a3.56,3.56,0,0,0,0,7.13Z"/><path className="cls-1" d="M35.77,251.35H83.33a3.56,3.56,0,1,0,0-7.12H35.77a3.56,3.56,0,0,0,0,7.13Z"/><path className="cls-1" d="M44,242.77H75.12a3.56,3.56,0,0,0,0-7.12H72.21c-.93-2.91-6.6-5.18-9.62-5.19L65.49,0l-3,0-2.9,230.46h-.06L56.62,0l-3,0,2.9,230.42c-3,0-8.69,2.27-9.62,5.19H44a3.56,3.56,0,1,0,0,7.13Z"/></svg>
      <Link to={`${route}`}>
        <div className={`bulb-div ${text}`}><p>{text}</p></div>
      </Link>
    </div>
  )

export default Lightbulb
