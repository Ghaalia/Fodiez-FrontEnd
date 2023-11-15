import React, { useState } from "react";
import getAllRecipes from "../api/recipies";
import RecipeItem from "./RecipeItem";
import { useQuery } from "@tanstack/react-query";
const RecipeList = () => {
  const [query, setQuery] = useState("");
  const { data: recipes, isLoading } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => getAllRecipes(),
  });
  if (isLoading) return <p>Loading ...</p>;
  const Recipe_List = recipes
    .filter((recipe) =>
      recipe.name?.toLowerCase().includes(query.toLowerCase())
    )
    .map((recipe) => <RecipeItem recipe={recipe} />);

  return (
    <div className="flex flex-col flex-wrap md:flex-row gap-[20px] w-[76vw]  justify-center items-center">
      {Recipe_List}
    </div>
  );
};

export default RecipeList;
