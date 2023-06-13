import React from 'react'

function Navbar() {
  return (
    <div style={{display:"flex", backgroundColor:"black", justifyContent:"space-between", color:"white", marginBottom:"50px"}}>
        <h1>Geekster</h1>
        <button>Logout</button>
    </div>
  )
}

export default Navbar