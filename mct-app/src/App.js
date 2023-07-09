import './App.css';
import Home from './components/Home';
import { useState, createContext } from 'react';

export const globalData = createContext() 

function App() {
  const[userData, setUserData] = useState([])

  return (
    <div className="App">
      <globalData.Provider value={[userData, setUserData]}> 
        <Home/>
      </globalData.Provider> 
    </div>
  );
}

export default App;
