import React from 'react'

function Card(props) {
  return (
    <div className='card' style={{backgroundImage:`url(${props.img})`, width:props.width, height:props.height}}>
        <h1>{props.name}</h1>
        <p>{props.dt}</p>
    </div>
  )
}

export default Card