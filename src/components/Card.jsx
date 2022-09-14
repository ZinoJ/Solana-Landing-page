import React from 'react'
import './Card.css'

function Card() {
  return (
    <div className="cards__container">
       <div className="card__container">
          <p>Circulating Supply</p>
          <h1>341.8M /<span>522.7M</span></h1>
          <p><span className='percentage'>65.4%</span> is circulating</p>
       </div>

       <div className="card__container">
          <p>Active Stake</p>
          <h1>385.6M /<span>522.7M</span></h1>
          <p >Delinquent stake: <span className='percentage'>0.4%</span></p>
       </div>

       <div className="card__container">
          <p>Circulating Supply</p>
          <h1>$39.94 /<span>522.7M</span></h1>
          <p>24h Vol: <span className='percentage'>$779.8M</span> MCap: <span className='percentage'>$13.6B</span></p>
       </div>
    </div>
  )
}

export default Card