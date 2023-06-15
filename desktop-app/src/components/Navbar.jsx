import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKTGpB-577t5-2TosOSnF9GaiNQ1wwGjA1LY9DF38eETWmXnI7UiK_ldQ0n-S-iJT5YMo&usqp=CAU" alt="loading" width="80px" height="50px" />
        <div className="menu">
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Contact</h3>
        </div>
        <div className="icons">
            <img src="https://cdn-icons-png.flaticon.com/512/81/81341.png" alt="loading" width="30px" height="25px"/>
            <img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="loading" width="30px" height="25px"/>
            <img src="https://assets.stickpng.com/images/5ecec78673e4440004f09e77.png" alt="loading" width="30px" height="25px"/>
        </div>
    </div>
  )
}

export default Navbar