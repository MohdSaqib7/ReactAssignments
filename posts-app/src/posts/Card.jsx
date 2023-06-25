import React from 'react'

const Card= (props)=> {
  return (
    <>
        <tr>
          <td>{props.title}</td>
          <td id='guideUrl'>{props.url}</td>
          <td style={{textTransform: "uppercase"}}>{props.author}</td>
          <td>{props.created_at}</td>
        </tr>
    </>
  )
}

export default Card