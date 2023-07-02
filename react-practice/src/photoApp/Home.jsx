import React, { useEffect, useState } from 'react'
import axios from "axios";
import './Style.css'
import Card from './Card'

function Home() {
  const[state,setState] = useState([])

  useEffect(()=>{
    axios.get(`https://api.unsplash.com/photos/?client_id=661hyIpz0HV9FtZOpjIJar9WSIMx3tXTAqY_6Tn8e68`).then((response) => {
      setState(response.data);
    });
  },[])

  return (
    <div id="home">
        <div className="navbar">
            <h1>Geek Gallary</h1>
            <div id="search">
                <input type="text" />
                <button>Search</button>
            </div>
        </div>
        <div className="container">
          {
            state.map((obj, idx)=>{
              return (
                <Card img={obj.urls.small} name={(obj.id).toUpperCase()} dt={obj.created_at} width={"320px"} height={("100").concat("pc")} />
              )
            })
          }
        </div>
    </div>
  )
}

export default Home