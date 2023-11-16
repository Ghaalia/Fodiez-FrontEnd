import React from "react";
import { Link, Navigate } from "react-router-dom";
import { BASEURL } from "../api";

const RecipeItem = ({ recipe }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card card-compact  w-40 h-70 bg-base-100 shadow-xl ">
        <figure>
          <img
            className="h-50"
            src={`${BASEURL}${recipe?.image}`}
            alt={"recipe"}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{recipe.name}</h2>
          <h2 className="card-title">{recipe.cookTime}</h2>
          <div className="card-actions justify-center ">
            <Link to={`/recipe/${recipe._id}`}>
              <button
                className="btn flex justify-center w-[100px] text-xs btn-primary "
                onClick={() => {
                  Navigate("/RecipeDetail");
                }}
              >
                View more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
