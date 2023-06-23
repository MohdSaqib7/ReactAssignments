import { useState, createContext } from 'react';
import './App.css';
import Header from './components/Header'
import SearchBox from './components/SearchBox';
import Movies from './components/Movies';

export const globalData = createContext() 

function App() {

  const[moviesList, setMoviesList] = useState([])

  return (
    <div className="App">
      <Header />
      <globalData.Provider value={{moviesList:moviesList, setMoviesList:setMoviesList}}>
        <SearchBox />
        <Movies />
      </globalData.Provider>  
    </div>
  );
}

export default App;
