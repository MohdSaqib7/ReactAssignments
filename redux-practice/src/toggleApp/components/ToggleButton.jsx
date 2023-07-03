import React, { useContext} from 'react'
import { globalData } from './App'

function ToggleButton() {

  const{state,setState} = useContext(globalData)
  
  return (
    <>
      {console.log(state)}
      <button style={{marginBottom:"20px"}} onClick={()=>{state==="Light"? setState("Dark"): setState("Light")}} >Toggle theme to {state==="Light"?"Dark":"Light"}</button>
    </>
  )
}

export default ToggleButton