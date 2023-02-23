import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  // app id and key from Edamam's recipe search API
  const APP_ID = '7cd3b232';
  const APP_KEY ='655235d57a5a0b5705a66bc98f0b8685';

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    GetRecipes();
  },[]);

const GetRecipes = async() => {
  const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
};

  return(
    <div className="App">
      <form className="search-form">
        <input className="search_bar" type="text" />
        <button className="search_button" type="submit">Search</button>
      </form>
      {recipes.map(recipe =>(
          <Recipe/>
      ))}
    </div>
  );
};

export default App;
