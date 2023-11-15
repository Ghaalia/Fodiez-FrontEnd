import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getAllCategory } from "../api/category";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  const [query, setQuery] = useState("");
  console.log("object");
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllCategory(),
  });
  if (isLoading) return <p>Loading ...</p>;
  const Category_List = categories
    .filter((category) =>
      category.name?.toLowerCase().includes(query.toLowerCase())
    )
    .map((category) => <CategoryItem category={category} />);
  console.log(categories);
  return (
    <>
      <div className=" flex flex-col flex-wrap md:flex-row gap-[20px] w-[76vw]  justify-center items-start mb-[50px]">
        {Category_List}
      </div>
    </>
  );
};

export default CategoryList;
