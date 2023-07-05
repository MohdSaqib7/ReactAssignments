import React, { useState, useEffect } from 'react'
import Card from './Card'

function Content() {

    const[gender, setGender] =  useState("")
    const[userData, setUserData] = useState([])

    useEffect(()=>{
        apiCall(setUserData)
    },[gender])

    async function apiCall(setUserData){
        const apiData = await fetch(`https://randomuser.me/api/?results=20&gender=${gender}`)
        const jsonData = await apiData.json()
        setUserData(jsonData.results)
    }

  return (
    <div className='content'>
        <div className="heading">
            <h1>User Details</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur labore veniam mollitia dicta eaque odit eveniet. Impedit accusantium, repudiandae at reprehenderit, maiores omnis ipsum obcaecati iure, repellat neque quas nostrum!
            Est ducimus eos cupiditate enim quas quidem, exercitationem dolore sapiente fugit repellendus! Aliquam facilis voluptatem esse cumque, accusantium quos dolorum asperiores nesciunt libero illum illo tempora, suscipit quod repudiandae. Ipsa?
            Repellendus asperiores, tempore provident ut non accusamus porro at dolore mollitia magnam placeat dolorem nisi? Libero ex omnis cupiditate magnam rem, eum nostrum, esse quos, pariatur at minus aperiam eligendi.</p>
        </div>
        <div className="gender">
            <input type="radio" name="gender" defaultChecked onChange={()=>setGender("")}/>
            <label>All</label>
            <input type="radio" name="gender" defaultValue="male" onChange={()=>setGender("male")} />
            <label>Male</label>
            <input type="radio" name="gender" defaultValue="female" onChange={()=>setGender("female")}/>
            <label>Female</label>
        </div>
        <div className="container">
            <table style={{width:"80%", marginLeft:"30px"}}>
                <thead>
                    <tr id='tablehead'>
                        <th>IMAGE</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>GENDER</th>
                    </tr>
                </thead> 
                <tbody>  
                {
                    userData.map((val,idx)=>{
                        return (
                              <Card img={val.picture.medium} name={val.name.first.concat(" ").concat(val.name.last)} email={val.email} gender={val.gender} key={idx} />      
                        )
                    })
                }      
                </tbody>        
            </table>
        </div>
    </div>
  )
}


export default Content