import React from 'react'
import {Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    <div id='navbar'>
        <h1>Geekster</h1>
        <div id='menu'>
            <Link to='/' style={{textDecoration:"none", color:'white'}}><h3>Home</h3></Link>
            <Link to='/products' style={{textDecoration:"none", color:'white'}}><h3>Products</h3></Link>
            <Link to='/cart' style={{textDecoration:"none", color:'white'}}><h3>Cart</h3></Link>
        </div>
    </div>
    </>
  )
}

export default Navbar