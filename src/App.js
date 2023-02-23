import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = '7cd3b232';
  const APP_KEY ='655235d57a5a0b5705a66bc98f0b86885	—';

  const exampleReq = `https://api.edamam.com/api/recipes/v2`

  
  return(
    <div className="App">
      <form className="search-form">
        <input className="search_bar" type="text" />
        <button className="search_button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
