import React from "react";
import RecipeDetail from "../Components/RecipeDetail";
import RecipeItem from "../Components/RecipeItem";
import { useQuery } from "@tanstack/react-query";
import RecipeList from "../Components/RecipeList";
import { useParams } from "react-router-dom";

const Recipes = () => {
  const { categoryId } = useParams();
  return (
    <div className="w-screen flex justify-center items-center">
      <div className="flex w-[95%] h-screen justify-between align-middle items-center ">
        <div className="fixed">
          <h2 className="text-5xl font-serif font-medium underline underline-offset-5 decoration-blue-300 ">
            Discover a world
          </h2>

          <h2 className="text-5xl font-serif font-medium underline underline-offset-5 decoration-blue-300 ">
            of flavors right at
          </h2>

          <h2 className="text-5xl font-serif font-medium underline underline-offset-5 decoration-blue-300 ">
            your fingertips.
          </h2>
        </div>

        <div className="w-96"></div>

        <RecipeList categoryId={categoryId} />
      </div>
    </div>
  );
};

export default Recipes;
