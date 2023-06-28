import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import Card from './Card';

function Cart() {
  const[prod, setProd] = useState([])

  useEffect(()=>{
    ProductsApi(setProd)
  },[])

  async function ProductsApi(setProd){
    const myData = await fetch("https://dummyjson.com/products")
    const responseData = await myData.json()
    console.log(responseData)
    setProd(responseData.products)
  }

  return (
    <>
      <Navbar />
      <div id="container">
      {
          prod.length===0 ? <p style={{color:"red"}}> Loading...</p> : prod.map((val,idx)=>{
            return (
              <Card name={val.title} image={val.images[0]} price={val.price} buy={"Delete"} adCrt={"Buy"} key={idx} id={val.id}/>
            )
          }) 
        }
      </div>
    </>
  )
}

export default Cart