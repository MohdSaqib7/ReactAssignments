import React, {useEffect, useState} from 'react'
import Card from './Card'
import {Container} from '@chakra-ui/react'

function Posts() {
    let[state, setState] = useState(0)
    const[myPosts, setMyPosts] = useState([])

    useEffect(()=>{
        apiCall(setMyPosts)
        if(state<10){
            fun()
        }else{
            return
        }
    },[state])

    async function apiCall(setMyPosts){
        const apiData = await fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${state}`)
        const jsonData = await apiData.json()
        setMyPosts([...myPosts, ...jsonData.hits])
        console.log("Data fetch")
    }

    function fun(){
        setTimeout(()=>{
            setState((preState)=>preState+1)
        },10000);
    }

  return (
    <>
    <Container mt={10} maxW='99%' >
        <h1 style={{color:"green", margin:"5px 40%"}}>Page Number -:- <span style={{color:"red"}}>{state}</span> -:- Added</h1>
        <table style={{width:"98%"}}>
            <thead>
                <tr id="tablehead">
                    <th>Title</th>
                    <th>URL</th>
                    <th>Author</th>
                    <th>Created At</th>
                </tr>
                </thead> 
                <tbody>  
                    {
                        myPosts.map((obj, idx)=>{
                            return (
                                <Card title={obj.title} url={obj.url} author={obj.author} created_at={obj.created_at} key={idx}/>
                            )
                        })
                    } 
                </tbody>        
        </table>
    </Container>
    </>
  )
}

export default Posts