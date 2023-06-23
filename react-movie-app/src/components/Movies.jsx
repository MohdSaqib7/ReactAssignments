import React, {useEffect, useContext} from 'react'
import { globalData } from "../App.js"
import Card from './Card.jsx'

function Movies() {

    const{moviesList, setMoviesList} = useContext(globalData)

    useEffect(()=>{
        moviesApi(setMoviesList)
      },[])

  return (
    <div className='container'>
        {moviesList.length!==0? moviesList.map((val,idx)=>{
          return (
            moviesList.length!==1? <Card key= {idx} title={val.title} img={`https://image.tmdb.org/t/p/original/`+val.poster_path} year={val.release_date} /> 
            : <Card key={idx} title={val.Title} img={val.Poster} year={val.Year}/>
          )
        }):null}
      </div>
  )
}

async function moviesApi(setMoviesList){
    const myData = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
    const responseData = await myData.json()
    setMoviesList(responseData.results)
}

export default Movies