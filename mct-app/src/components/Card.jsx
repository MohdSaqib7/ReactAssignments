import { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faEnvelope, faHeart, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faGlobe, faPhone, faHeart as faHeartFill} from '@fortawesome/free-solid-svg-icons'
import { apiCall } from './Home'
import { globalData } from '../App'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


function Card(props) {

    const[state, setState] = useState(true)
    const[userData, setUserData] = useContext(globalData)

    const myImage = `https://avatars.dicebear.com/v2/avataaars/${props.username}.svg?options[mood][]=happy`
    const emptyHeart = <FontAwesomeIcon icon={faHeart} />
    const fillHeart = <FontAwesomeIcon icon={faHeartFill} />

  return (
    <div className='card'>
        <div className="image"><img src={myImage} alt="loading" /></div>
        <div className="naming"><h3>{props.name}</h3></div>

        <div className="info">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>{props.email}</p>
        </div>
        <div className="info">
            <FontAwesomeIcon icon={faPhone} />
            <p>{props.phone}</p>
        </div>
        <div className="info">
            <FontAwesomeIcon icon={faGlobe} />
            <p>{props.website}</p>
        </div>

        <div className="menu">
            <button style={{color:"red"}} onClick={(e)=>{state?setState(false):setState(true)}}>{state?emptyHeart:fillHeart}</button>
            <button><FontAwesomeIcon icon={faEdit} onClick={(e)=>{editUser(props.id, setUserData)}}/></button>
            <button><FontAwesomeIcon icon={faTrashCan} onClick={(e)=>removeUser(props.id, props.name, setUserData)}/>{console.log(userData)}</button>
        </div>
    </div>
  )
}

export default Card



function removeUser(id, name, setUserData){
    fetch(`https://mydata-fb7x.onrender.com/users/${id}`,{
        method:'DELETE'
    }).then((result)=>{
        confirmAlert({
            title: name,
            message: 'Are you sure : User will permanently delete',
            buttons: [
              {
                label: 'Ok',
                onClick: () => {apiCall(setUserData)}
              },
              {
                label: 'Cancel',
                onClick: () => {return}
              }
            ]
          });
    })
}    


function editUser(id, setUserData){
  const obj ={
    name:"",
    email:"",
    phone:"",
    website:""
  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    const userCreate = {
      id:id, 
      username:"potterharzy", 
      name:obj.name, 
      email:obj.email,
      phone:obj.phone,
      website: "https://codeharry.org",
      address: {
        "street": "Embarcadero Street",
        "suite": "San Francisco",
        "city": "Humlikon",
        "zipcode": "740123"
    },
    company_name: "calefornia"
    }

    setTimeout(()=>{
      console.log("run..")
    },100)

    fetch("https://mydata-fb7x.onrender.com/users/"+id,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(userCreate)
    }).then((res)=>{
      apiCall(setUserData)
    }).catch((err)=>{
      console.log(err)
    })

    window.location.reload(true)
  }

  confirmAlert({
    customUI: () => {
        return (
        <div className='inputcontainer'>
            <h2>Basic Model</h2>
            <div className="fields">
              <label>Name:</label>
              <input placeholder='Enter new Name' type="text" name="name"  onChange={(e)=>{obj.name=e.target.value}}/>
            </div>
            <div className="fields">
              <label>Email:</label>
              <input placeholder='Enter new Email' type='email' name="email"  onChange={(e)=>{obj.email=e.target.value}}/>
            </div>
            <div className="fields">
              <label>Phone:</label>
              <input placeholder='Enter Phone Number' name="phone" type='number' onChange={e=>{obj.phone=e.target.value}} />
            </div>
            <div className="fields website">
              <label>Website:</label>
              <input placeholder='Enter Website link'  name="website" type='text' onChange={e=>{obj.website=e.target.value}}/>
            </div>
            <button type='submit' onClick={(e)=>{handleSubmit(e)}}>Update</button>
        </div>
        )
    }
})     
}

