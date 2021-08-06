import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';

const Recipes = ({ search }) => {
  const [data, setData] = useState([]);

  const url = `https://api.edamam.com/search?q=${search}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&from=0&to=9`;

  useEffect(() => {
    const request = async () =>
      await axios
        .get(url)
        .then((res) => {
          setData(res.data.hits);
          console.log(res.data.hits);
        })
        .catch((error) => {
          console.log(error);
        });
    request();
  }, [url]);

  return (
    <div className="w-full h-full grid lg:grid-cols-3 lg:px-4 lg:py-10 md:grid-cols-2 md:px-10 md:py-10 ">
      {data.map((recipe) => (
        <RecipeCard
          title={recipe.recipe.label}
          key={recipe.recipe.id}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredientLines}
        />
      ))}
    </div>
  );
};

export default Recipes;
