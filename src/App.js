import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {
  // app id and key from Edamam's recipe search API
  const APP_ID = '7cd3b232';
  const APP_KEY ='655235d57a5a0b5705a66bc98f0b8685';

  useEffect(() => {
    GetRecipes();
  },[]);

const GetRecipes = async() => {
  const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data = response.json();
  console.log(data);
};

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
