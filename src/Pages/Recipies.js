import React from "react";
import RecipeDetail from "../Components/RecipeDetail";
import RecipeItem from "../Components/RecipeItem";
import { useQuery } from "@tanstack/react-query";
import RecipeList from "../Components/RecipeList";

const Recipies = () => {
  return (
    <div className="">
      <RecipeList />
    </div>
  );
};

export default Recipies;
