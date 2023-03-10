import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css'; 

const App = () => {
  // app id and key from Edamam's recipe search API
  const APP_ID = '7cd3b232';
  const APP_KEY = '655235d57a5a0b5705a66bc98f0b8685';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  
  useEffect(() => {
    getRecipes();
  },[query]);

const getRecipes = async() => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
};

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className="App">
      <h1 className="h1">Search Millions of Recipes</h1>
      <form onSubmit={getSearch} className="search_form">
        <input className="search_bar" type="search" value={search} onChange={updateSearch}/>
        <button className="search_button" type="submit">Search</button>
      </form>

      <div className='recipes'>
      {recipes.map((recipe, index) =>(
          <Recipe
          key={index}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          />
      ))}
      </div>
      <h3 className="h3">Powered by Edamam</h3>
    </div>
  );
};

export default App;
