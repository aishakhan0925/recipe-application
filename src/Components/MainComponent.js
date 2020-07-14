import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import Header from "./Header";
import "../App.css";

export const Main = () => {
  const APP_ID = "a97df95a";
  const APP_KEY = "c48dee46cebdbd9c0570f552567d3eab";

  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20&calories=591-722&health=alcohol-free`
    );
    const data = await response.json();
    setRecipe(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const rcp = recipe.map((recipe) => (
    <div classNamw="container">
      <div className="row">
        <div className="col-12 col-md m-1">
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <Header />
      <form className="search-form" onSubmit={getSearch}>
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          <h4>Search</h4>
        </button>
      </form>
      <div class="container">
        <div className="row">{rcp}</div>
      </div>
    </div>
  );
};
