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
      <div className="shadow-lg shadow-gray-500 rounded-md w-3/4 h-3/4 bg-base-100 flex">
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

          <h2 className="text-lg mb-2 text-bold">
            Cooking Time: {recipe?.cookTime}
          </h2>

          <div>
            <h4 className="text-md mb-2 font-bold">Ingredients:</h4>
            <p className="text-md mb-2">{recipe?.Ingradients}</p>
          </div>

          <div>
            <h4 className="text-md mb-2 font-bold">Description:</h4>
            <p className="text-md mb-2">{recipe?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
