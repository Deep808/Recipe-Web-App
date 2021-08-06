import React from 'react';

const RecipeCard = ({ title, key, image, ingredients }) => {
  return (
    <div className="w-full h-full py-auto">
      <div className="w-80 mx-auto my-4 rounded-md bg-blue-400 flex flex-col justify-center items-center text-center p-4 md:px-4">
        <img
          className="w-auto my-auto relative rounded-md object-contain"
          key={key}
          src={image}
          alt="image"
        />
        <h1 className="py-4 font-bold text-2xl">{title}</h1>
        <ol>
          {ingredients.map((ingredient) => (
            <li>{ingredient}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeCard;
