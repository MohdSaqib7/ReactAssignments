import React, { useEffect, useContext } from 'react'
import { globalData } from '../App';
import axios from "axios";
import Card from './Card';

function Home() {
  const[userData, setUserData] = useContext(globalData)

  useEffect(()=>{
    apiCall(setUserData)
  },[])

  return (
    <div className='home'>
        {
          userData.map((val, idx)=>{
            return (
              <Card username={val.username} name={val.name} email={val.email} phone={val.phone} website={val.website} id={val.id} key={idx} />
            )
          })
        }
    </div>
  )
}

export default Home

export function apiCall(setUserData){
  axios
        .get("https://mydata-fb7x.onrender.com/users")
        .then(data => setUserData(data.data))
        .catch(error => console.log(error));
}