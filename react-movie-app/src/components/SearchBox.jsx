import React, { useState, useContext } from 'react'
import { globalData } from "../App.js"

function SearchBox() {
    const[state,setState] = useState("")
    const{moviesList, setMoviesList} = useContext(globalData)

    const apiCall= async ()=>{
        if(state===""){
          return
        }
          const apiData = await fetch(`https://www.omdbapi.com/?apikey=e25db4d8&t=${state}&plot=full`)
          const resp = await apiData.json()
          const arr = [resp]
          if(resp.Response==="True"){
            setMoviesList(arr)
          }  
    }

  return (
    <div className='search-area'>
        <input className='input-area' placeholder='Enter movie name' onChange={e => setState(e.target.value)}></input>
        <button className='search-button' onClick={apiCall}>Search</button>
        {console.log(moviesList)}
    </div>
  )
}

export default SearchBox