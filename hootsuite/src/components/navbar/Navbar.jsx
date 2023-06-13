import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div id='navbar'>
        <img id='mylogo' src="https://logos-world.net/wp-content/uploads/2021/03/Hootsuite-Logo.png" alt="" />
        <div id='left'>
            <h4>Platform</h4>
            <h4>Plans</h4>
            <h4>Enterprise</h4>
            <h4>Resources</h4>
            <h4>Education</h4>
        </div>
        <div id='right'>
            <h3>Contact Us</h3>
            <h3>Log In</h3>
            <h3 id='signup'>Sign Up</h3>
        </div>
    </div>
  )
}

export default Navbar