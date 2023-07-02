import React, { createContext, useState } from 'react'
import {BrowserRouter, NavLink, Routes, Route} from "react-router-dom"
import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';
import Services from './components/Services';
import ToggleButton from './ToggleButton'


export const globalData = createContext() 

function Main() {

  const[state, setState] = useState("Light")
  
  return (
    <globalData.Provider value={{state:state,setState:setState}}>
      <div className="App" style={{backgroundColor:state==="Light"? "white": "black", color:state==="Light"?"black":"white"}}>
        <h3 style={{fontWeight:"300"}}>I have changed theme to {state==="Light"? "Light" : "Dark"}</h3>
        <h4 style={{marginBottom:"0px", marginTop:"3px", fontFamily:"sans-serif", fontWeight:"300"}}>Geekster</h4>

        <BrowserRouter>
          <h3><NavLink to='/'>Home</NavLink></h3>
          <h3><NavLink to='/services'>Services</NavLink></h3>
          <h3><NavLink to='/contact'>Contact</NavLink></h3>
          <br />

        <ToggleButton />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services/>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
      </globalData.Provider>  
  );
}

export default Main;
