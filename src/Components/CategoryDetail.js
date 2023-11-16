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
      <div className="bg-primary min-h-screen flex items-center justify-center">
        <div className="border border-white w-3/4 h-3/4 bg-white flex">
          <div className="w-1/3">
            <img
              src={`${BASEURL}${category?.image}`}
              alt={category?.name}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="w-full md:w-[65%] h-full pt-[30px] flex flex-col p-3">
            <h1>Category Name: {category?.name}</h1>
            <button className="bg-black text-white px-4 py-2 rounded-md">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
