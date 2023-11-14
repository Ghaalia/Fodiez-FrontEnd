import React from 'react'

const RecipyItem = () => {
  return (
    <div>
    <div className="recipe-card" onClick={onClick}>
      <img src={recipe.image}></img>
      <div className="recipe-card-title">
        <span
          onClick={(e) => {
            e.stopPropagation();
            onFavouriteButtonClick(recipe);
          }}
        >
          {isFavourite ? (
            <AiFillHeart size={25} color="red" />
          ) : (
            <AiOutlineHeart size={25} />
          )}
        </span>
        <h3>{recipe.title}</h3>
      </div>
    </div>
  );
};
)};

export default RecipyItem
