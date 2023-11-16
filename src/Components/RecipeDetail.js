import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getOneRecipe } from "../api/recipies";
import { BASEURL } from "../api";
const RecipeDetail = () => {
  const { RecipeId } = useParams();
  const { data: recipe } = useQuery({
    queryKey: ["recipes", RecipeId],
    queryFn: () => getOneRecipe(RecipeId),
  });
  return (
    <div className="bg-primary min-h-screen flex items-center justify-center">
      <div className="border border-white w-3/4 h-3/4 bg-gray-300 flex">
        <div className="w-1/3">
          <img
            src={`${BASEURL}${recipe?.image}`}
            alt={recipe?.name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-2/3 p-4">
          <h1 className="text-2xl font-bold mb-2">
            Recipe Name: {recipe?.name}
          </h1>
          <h2 className="text-lg mb-2">Cooking Time: {recipe?.cookTime}</h2>
          <h4 className="text-md mb-2">Ingredients: {recipe?.Ingradients}</h4>
          <h3 className="text-md mb-4">Description: {recipe?.description}</h3>

          <button className="bg-black text-white px-4 py-2 rounded-md">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
