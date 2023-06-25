import Home from "./components/Home";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart"
import { createContext, useState } from "react";

export const globalData = createContext()

function App() {
  const[data, setData] = useState([])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <globalData.Provider value={{data:data, setData:setData}}>  
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </globalData.Provider> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
