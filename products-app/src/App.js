import Home from "./components/Home";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
