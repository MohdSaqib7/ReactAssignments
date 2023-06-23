import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <h1>{props.title}</h1>
      <img src={props.img} alt="loadind"  width="300px" height="300px" />
      <h3>{props.year}</h3>
    </div>
  )
}
export default Card
