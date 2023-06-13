import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import LoginFunctionality from './components/LoginFunctionality'
import { useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <div className="App">
      <Navbar />
      {
      isLogin ? <LoginFunctionality/> : <Home/>
      }
    </div>
  );
}

export default App;
