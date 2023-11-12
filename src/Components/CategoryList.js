import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getAllCategory } from "../api/category";
import Navbar from "./Navbar";

const CategoryList = () => {
  const [query, setQuery] = useState("");

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllCategory(),
  });

  const CategoryList = categories
    ?.filter((category) =>
      category.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((category) => <CategoryList category={category} key={category.id} />);
  return (
    <>
      <div className="bg-[#F9E3BE] flex flex-col justify-center items-center ">
        <div className="w-[76vw] flex h-[30px] mb-[30px] mt-[30px]">
          <input
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            placeholder="Search"
            className="w-[70%] flex justify-start items-center border border-black rounded-md"
          />
          {/* <button
            className="ml-auto w-[25%] px-3 py-2 rounded-md text-sm md:text-xl border border-black  flex justify-center items-center bg-green-400 hover:bg-green-600"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Add Category
          </button> */}
        </div>
        <div className=" flex flex-col flex-wrap md:flex-row gap-[20px] w-[76vw]  justify-center items-center mb-[50px]">
          {CategoryList}
        </div>
      </div>
    </>
  );
};

export default CategoryList;
