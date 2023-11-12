import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllCategory } from "../../api/auth";

const Categoryitem = () => {
  const { data: catdata } = useQuery({
    queryKey: ["category"],
    queryFn: () => getAllCategory(),
  });

  return (
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

          <button className="w-[70px] border border-black rounded-md  hover:bg-green-400 mb-5">
            Create Category
          </button>

          <button className="w-[70px] border border-black rounded-md  hover:bg-red-400">
            Delete Category
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categoryitem;
