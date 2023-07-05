import React from 'react'

const Card= (props)=> {
  return (
    <>
        <tr>
          <td><img src={props.img} alt='loading'></img></td>
          <td>{props.name}</td>
          <td>{props.email}</td>
          <td>{props.gender}</td>
        </tr>
    </>
  )
}

export default Card