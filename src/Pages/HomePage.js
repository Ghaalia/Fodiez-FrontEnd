import React from "react";
import CategoryList from "../Components/CategoryList";
import RecipeItem from "../Components/RecipeItem";

const HomePage = () => {
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

        <CategoryList />
      </div>
    </div>
  );
};

export default HomePage;
