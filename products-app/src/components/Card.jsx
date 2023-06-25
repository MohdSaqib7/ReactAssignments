import React from 'react'
import { useContext } from 'react'
import { globalData } from '../App'

const Card = (props) => {
  const{data, setData} = useContext(globalData)

  return (
    <div className='card' style={{padding:"10px 5px"}}>
      <h1>{props.name}</h1>
      <img src={props.image} alt="loadind"  width="300px" height="300px" />
      <h4>price: {props.price} $</h4>
      <div style={{display:"flex",gap:"20px"}}>
        <button style={{padding:"2px 5px"}}>Buy</button>
        <button onClick={(e)=>console.log(props.name)} style={{padding:"2px 5px"}}>Add to cart</button>
      </div>
    </div>
  )
}
export default Card