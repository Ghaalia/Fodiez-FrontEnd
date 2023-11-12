import React from "react";
import { getOneCategory } from "../api/category";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const CategoryDetail = () => {
  const { CategoryId } = useParams();

  const { data: category } = useQuery({
    queryKey: ["categories", CategoryId],
    queryFn: () => getOneCategory(CategoryId),
  });
  return (
    <div>
      <div className="bg-[#F9E3BE] w-screen h-[100vh] flex justify-center items-center">
        <div className="border border-black rounded-md w-[70%] h-[70%] overflow-hidden flex flex-col md:flex-row p-5">
          <div className="h-full w-full md:w-[35%]">
            <img
              src={category?.image}
              alt={category?.name}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="w-full md:w-[65%] h-full pt-[30px] flex flex-col p-3">
            <h1>Name: {category?.name}</h1>

            <button className="w-[70px] border border-black rounded-md  hover:bg-red-400">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
