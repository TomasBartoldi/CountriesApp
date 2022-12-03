import React from 'react'
import './Card.css'

const Card = ({ name, flag, continent }) => {
  return (
    
    <div className='countrie-card'>

      <div className='countrie-flag-container'>
        <img className='countrie-flag' src={flag} alt="Img not found" width='130px' height='105px' />
      </div>

      <div  className='countrie-name-container'>
        <div className='countrie-name'>
          <h3>{name}</h3>
        </div>

        <div  className='countrie-continent'>
          <h5>Continent:  {continent}</h5>
        </div>
      </div>      
      
    </div>
  )
}

export default Card;