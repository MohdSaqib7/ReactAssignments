import React, { useState } from 'react'
import './form.css'

function Form() {
    const obj = {
        name:"",
        email:"",
        password:"",
        gender:"",
        city:"",
        language:"",
        meassge:""
    }
    const [data, setData] = useState(obj)

  return (
    <div className='form'>  
        
        <h3>Register form</h3><br/><br/>
        <label>NAME:</label>
        <input type="text" s /><br/><br/>

        <label>EMAIL:</label>
        <input type="email" onChange={(e)=>{setData(data.email=e.target.value)}}/><br/><br/>

        <label>PASSWORD:</label>
        <input type="password" onChange={(e)=>{setData(data.password=e.target.value)}}/><br/><br/>

        <label>GENDER :: </label>
        <input type="radio" name="gender" defaultValue="male" />
        <label>male:</label>
        <input type="radio" name="gender" defaultValue="female" />
        <label>female:</label>
        <input type="radio" name="gender" defaultValue="other" />
        <label>Other:</label><br/><br/>

        <label>CITY:</label>
          <select>
              <option>--None--</option>
              <option>Delhi</option>
              <option>Pune</option>
              <option>Bangalore</option>
              <option>Mumbai</option>
              <option>Hyderabad</option>
          </select><br/><br/>

        <label>LANGUAGE::- </label>
        <label> HTML: </label>
        <input type="checkbox" defaultValue="Pune" />
        <label> Java: </label>
        <input type="checkbox" defaultValue="Delhi" />
        <label> JavaScript: </label>
        <input type="checkbox" defaultValue="hyderabad" />
        <label> C++: </label>
        <input type="checkbox" defaultValue="Delhi" /><br/><br/>
        
        <label>MASSAGE:</label><br />
        <textarea rows="10" cols="50" defaultValue="write here"></textarea><br/><br/>

        <button onClick={console.log(data)} type="button" id='formsubmit'>signup</button>
    </div>
  )
}

export default Form