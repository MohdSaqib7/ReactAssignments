import React from 'react'

const Card = (props) => {

  return (
    <div className='card' style={{padding:"10px 5px"}}>
      <h1>{props.name}</h1>
      <img src={props.image} alt="loadind"  width="300px" height="300px" />
      <h4>price: {props.price} $</h4>
      <div style={{display:"flex",gap:"20px"}}>
        <button style={{padding:"2px 5px"}}>{props.buy}</button>
        <button>{props.adCrt}</button>
      </div>
    </div>
  )
}
export default Card