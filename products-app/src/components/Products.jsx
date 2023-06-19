import Navbar from './Navbar';
import React, {useEffect, useState} from 'react'
import Card from './Card'

function Products() {

  const[state, setState] = useState("")
  const[products, setProducts] = useState([])

  useEffect(()=>{
    ProductsApi(setProducts)
  },[])

  const apiCall= async ()=>{
    if(state===""){
      return
    }
      const apiData = await fetch(`https://dummyjson.com/products/search?q=${state}`)
      const resp = await apiData.json()
      setProducts(resp.products)
    }

  return (
    <>
    <Navbar />
    <div id="products">
      <h1 style={{textAlign:"center", marginTop:"5px", marginBottom:"15px"}}>Products</h1>
        <div className='search-area'>
          <input className='input-area' placeholder='Enter product Name' onChange={e => setState(e.target.value)}></input>
          <button className='search-button' onClick={apiCall}>Search</button>
        </div>
        <div className='container'>
        {console.log(products)}
        {
          products.length===0 ? <p style={{color:"red"}}> currently Not available</p> : products.map((val,idx)=>{
            return (
            <Card name={val.title} image={val.images[0]} price={val.price}  key={idx}/>
            )
          })
          
        }
      </div>
    </div>
    </>
  )
}

export default Products


async function ProductsApi(setProducts){
  const myData = await fetch("https://dummyjson.com/products")
  const responseData = await myData.json()
  setProducts(responseData.products)
}

